import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAverageReview } from "../../service/reviewService";
import CardContainer, {
  ButtonStyleCard,
  CardBack,
  CardFront,
  CardInner,
  DescDiv,
  IMGContainer,
  TextDiv,
} from "./Card.styled";
import Rating from "@mui/material/Rating";

const Card = ({ recipe, children }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Fetch the average review when the component mounts
    fetchAverageRating();
  }, []);

  const fetchAverageRating = async () => {
    try {
      // Make an API call to fetch the average review
      const response = await getAverageReview(recipe.id);
      console.log(response);
      setAverageRating(response.averageRating);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardContainer
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <CardInner className={flipped ? "flipped" : ""}>
        <CardFront>
          <TextDiv>
            <h2 title={recipe.title}>{recipe.title}</h2>
          </TextDiv>
          <IMGContainer>
            <img src={recipe.image} alt={recipe.title} />
          </IMGContainer>
        </CardFront>
        <CardBack>
          <TextDiv>
            <h2 title={recipe.title}>{recipe.title}</h2>
          </TextDiv>
       
          <Rating
            name="average-rating"
            value={averageRating}
            precision={0.5}
            readOnly
          />
          <ButtonStyleCard
            onClick={() =>
              navigate(`/detail/${recipe.title}`, { state: recipe })
            }
          >
            View More
          </ButtonStyleCard>

             
         

          {children} {}
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
