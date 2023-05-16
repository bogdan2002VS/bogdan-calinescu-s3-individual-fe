import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardContainer, {
  CardFront,
  CardBack,
  CardInner,
  IMGContainer,
  DescDiv,
  ButtonStyleCard,
  TextDiv,
} from "./Card.styled.jsx";
import { getRecipes } from "../../service/recipeService.js";
import Card from "./Card"; // Import the Card component

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px; /* Reduced gap value */
`;

const CommunityRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const recipes = await getRecipes();
      setRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <Grid>
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
};

export default CommunityRecipe;
