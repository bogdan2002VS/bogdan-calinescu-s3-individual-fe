
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer, {
  ButtonStyleCard,
  CardBack,
  CardFront,
  CardInner,
  DescDiv,
  IMGContainer,
  TextDiv,
} from "./Card.styled";

const Card = ({ recipe }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

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
          <DescDiv>
            <p>
              Calories: <span>{recipe.calories}</span>
            </p>
          </DescDiv>
          <ButtonStyleCard
            onClick={
              // () => navigate(`/details/${recipe.label}`, { state: recipe })
              () => navigate(`/details/${recipe.title}`, { state: recipe })
            }
          >
            View More
          </ButtonStyleCard>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default Card;
