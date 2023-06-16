import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Rating, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {
  DetailsContainer,
  LabelDiv,
  MealInfo,
  IMGDiv,
  MealIngredients,
  CardDiv,
} from './Details.styled';
import { ButtonStyle } from '../../components/header/Header.styled';
import { AboutTitle } from '../about/About.styled';
import { IMGContainer } from '../../components/header/Card.styled';
import diet from '../../assets/diet.svg';
import defaultImage from '../../assets/default-image.jpg';
import { createReview, getReviewByRecipeId } from '../../service/reviewService';
import instance from '../../axiosConfig.mjs';
import Button from '@mui/material/Button';
import { Token } from '@mui/icons-material';

const Detail = () => {
  const recipe = useLocation();
  const { id, title, calories, mealType, ingredients, image } = recipe.state;

  const navigate = useNavigate();
  const [rating, setRating] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const review = await getReviewByRecipeId(id);
        setRating(review.stars);
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    };

    fetchReview();
  }, [id]);

  const handleSubmit = () => {
    try {
      createReview(id, rating);
      setShowFeedback(true);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  return (
      <DetailsContainer>
        <LabelDiv>
          <AboutTitle>{title}</AboutTitle>
          <IMGContainer>
            <img style={{ border: 'none' }} src={diet} alt="" />
          </IMGContainer>
        </LabelDiv>
        <CardDiv>
          <MealInfo>
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {'\n'}
              MealType: <span>{mealType}</span>
            </p>
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {'\n'}
              Calories: <span>{Math.floor(calories)}</span>
            </p>
          </MealInfo>
          <IMGDiv>
            <img src={image || defaultImage} alt={title} />
          </IMGDiv>
          <MealIngredients>
            <div>
              <p>
                <span></span> Ingredients:
              </p>
              {ingredients && Array.isArray(ingredients) ? (
                  ingredients.map((ingr, index) => (
                      <p key={index}>
                        <span>{index + 1}</span> : {ingr}
                      </p>
                  ))
              ) : (
                  <p>No ingredient lines available</p>
              )}
            </div>
            <Link to="/ChatRoom">Chat with users</Link>
          </MealIngredients>
          <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
            />
            <ButtonStyle style={{ marginTop: '1rem' }} onClick={handleSubmit}>
              Submit Rating
            </ButtonStyle>

            <ButtonStyle
                onClick={() => navigate(`/statistics/${id}`, { state: recipe.state })}
            >
              Go to Statistics
            </ButtonStyle>
          </div>
        </CardDiv>
        <ButtonStyle style={{ marginBottom: '5rem' }} onClick={() => navigate(-1)}>
          Go Back
        </ButtonStyle>



        <Snackbar
            open={showFeedback}
            autoHideDuration={3000}
            onClose={handleCloseFeedback}
        >
          <MuiAlert
              onClose={handleCloseFeedback}
              severity="success"
              sx={{ width: '100%' }}
          >
            Rating submitted successfully!
          </MuiAlert>
        </Snackbar>
      </DetailsContainer>
  );
};

export default Detail;