import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getRecipes, deleteRecipe } from "../../service/recipeService.js";
import Card from "./Card";
import { useSelector } from "react-redux"; // import useSelector
import CardContainer, {
  ButtonStyleCard,
  CardBack,
  CardFront,
  CardInner,
  DescDiv,
  IMGContainer,
  TextDiv,
} from "./Card.styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;

const DeleteButton = styled(ButtonStyleCard)`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const UpdateButton = styled(ButtonStyleCard)`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Set the text color to white */
`;

const CommunityRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // State for delete confirmation

  const loggedUser = useSelector((state) => state.user.loggedUser); // access logged user from redux store

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

  const handleDelete = async (id) => {
    // create a delete handler
    try {
      if (deleteConfirmation === id) {
        await deleteRecipe(id);
        setRecipes(recipes.filter((recipe) => recipe.id !== id)); // remove deleted recipe from state
        setDeleteConfirmation(null); // Reset delete confirmation state after deletion
      } else {
        setDeleteConfirmation(id); // Show confirmation dialog
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <Grid>
      {recipes.map((recipe) => (
        
        <Card key={recipe.id} recipe={recipe} > 
          
          {loggedUser && loggedUser.role === "admin" ? (
            <>
              <DeleteButton onClick={() => handleDelete(recipe.id)}>
                {deleteConfirmation === recipe.id ? "Confirm Delete" : "Delete"}
              </DeleteButton>
              <Link to={`/update-recipe/${recipe.id}`}>
                <UpdateButton>Update</UpdateButton>
              </Link>
            </>
          ) : null}
        </Card>
      ))}
    </Grid>
  );
};

export default CommunityRecipe;
