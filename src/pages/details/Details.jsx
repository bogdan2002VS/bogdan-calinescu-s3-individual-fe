import { useLocation, useNavigate } from "react-router-dom";
import {
  CardDiv,
  DetailsContainer,
  IMGDiv,
  LabelDiv,
  MealInfo,
  MealIngredients,
} from "./Details.styled";
import diet from "../../assets/diet.svg";
import { AboutTitle } from "../about/About.styled";
import { IMGContainer } from "../../components/header/Card.styled";
import { ButtonStyle } from "../../components/header/Header.styled";
import defaultImage from "../../assets/default-image.jpg";
const Details = () => {
  const recipe = useLocation();
  const {
    label,
    calories,
    totalNutrients: { CA, CHOLE, CHOCDF, ENERC_KCAL, FAT, SUGAR, PROCNT, FASAT },
    ingredientLines,
    image,
  } = recipe.state;
  const navigate = useNavigate();
  return (
    <DetailsContainer>
      <LabelDiv>
        <AboutTitle>{label}</AboutTitle>
        <IMGContainer>
          <img style={{ border: "none" }} src={diet} alt="" />
        </IMGContainer>
      </LabelDiv>
      <CardDiv>
        <MealInfo>
          <p style={{ whiteSpace: "pre-wrap" }}>
            Nutrients:
            {"\n"}
            {CA.label}:
            <span>
              {Math.floor(CA.quantity)}
              {CA.unit}
            </span>
            {"\n"}
            {CHOCDF.label}:
            <span>
              {Math.floor(CHOCDF.quantity)}
              {CHOCDF.unit}
            </span>
            {"\n"}
            {CHOLE.label}:
            <span>
              {Math.floor(CHOLE.quantity)}
              {CHOLE.unit}
            </span>
            {"\n"}
            {ENERC_KCAL.label}:
            <span>
              {Math.floor(ENERC_KCAL.quantity)}
              {ENERC_KCAL.unit}
            </span>
            {"\n"}
            Calories:
            <span>{Math.floor(calories)}</span>
            {"\n"}
            {FAT.label}:
            <span>
              {Math.floor(FAT.quantity)}
              {FAT.unit}
            </span>
            {"\n"}
            {FASAT.label}:
            <span>
              {Math.floor(FASAT.quantity)}
              {FASAT.unit}
            </span>
            {"\n"}
            {PROCNT.label}:
            <span>
              {Math.floor(PROCNT.quantity)}
              {PROCNT.unit}
            </span>
            {"\n"}
            {SUGAR.label}:
            <span>
              {Math.floor(SUGAR.quantity)}
              {SUGAR.unit}
            </span>
          </p>
        </MealInfo>
        <IMGDiv>
          <img src={image || defaultImage} alt={label} />
        </IMGDiv>
        <MealIngredients>
          <div>
            {ingredientLines.map((ingr, index) => {
              return (
                // <div }>
                <p key={index}>
                  <span> {index + 1}</span> : {ingr}
                </p>
                // </div>
              );
            })}
          </div>
        </MealIngredients>
      </CardDiv>
      <ButtonStyle
        style={{ marginBottom: "5rem" }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </ButtonStyle>
    </DetailsContainer>
  );
};

export default Details;
