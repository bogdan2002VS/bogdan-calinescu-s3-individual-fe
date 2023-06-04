import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { keyframes } from "styled-components";
import {
  DetailsContainer,
  LabelDiv,
  MealInfo,
  IMGDiv,
  MealIngredients,
  CardDiv,
  StarRating,
  StarRadio,
  StarLabel,
} from "./Details.styled";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ButtonStyle } from "../../components/header/Header.styled";
import { AboutTitle } from "../about/About.styled";
import { IMGContainer } from "../../components/header/Card.styled";
import diet from "../../assets/diet.svg";
import defaultImage from "../../assets/default-image.jpg";
import { createReview } from "../../service/reviewService"; // Import the correct reviewService

const Detail = () => {
  const recipe = useLocation();
  const { id, title, calories, ingredients, image } = recipe.state;
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);

  const handleSubmit = async () => {
    const review = {
      recipeId: id,
      stars: rating,
    };
    await createReview(review);
  };

  const starSelectedAnimation = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <DetailsContainer>
      <LabelDiv>
        <AboutTitle>{title}</AboutTitle>
        <IMGContainer>
          <img style={{ border: "none" }} src={diet} alt="" />
        </IMGContainer>
      </LabelDiv>
      <CardDiv>
        <MealInfo>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {"\n"}
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
        </MealIngredients>
        <StarRating>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            const isChecked = ratingValue === rating;

            return (
              <StarLabel
                key={i}
                isChecked={isChecked}
                onClick={() => setRating(ratingValue)}
                animation={starSelectedAnimation} // Apply the animation
              >
                <StarRadio
                  name="rating"
                  value={ratingValue}
                  onChange={() => setRating(ratingValue)}
                />
                <i className="fas fa-star"></i>
              </StarLabel>
            );
          })}
        </StarRating>
        <ButtonStyle style={{ marginBottom: "5rem" }} onClick={handleSubmit}>
          Submit Review
        </ButtonStyle>
      </CardDiv>
      <ButtonStyle style={{ marginBottom: "5rem" }} onClick={() => navigate(-1)}>
        Go Back
      </ButtonStyle>
    </DetailsContainer>
  );
};

export default Detail;
