import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TextField, Button, IconButton, Snackbar, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { getRecipes, updateRecipe } from "../../service/recipeService";
import CardArea, { Section } from "./CreateRecipe.style";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: #f5fff5; /* light green */
  border-radius: 10px;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #3bb143 30%, #85e085 90%); /* shades of green */
  color: white;
  margin-top: 1rem;
  &:hover {
    background: linear-gradient(45deg, #85e085 30%, #3bb143 90%);
  }
`;

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});




  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const fetchedRecipes = await getRecipes(recipeId);
        if (fetchedRecipes.length > 0) {
          const fetchedRecipe = fetchedRecipes[0];
          setRecipe(fetchedRecipe);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    

    fetchRecipe();
  }, [recipeId]);

  const handleInputChange = (e, index) => {
    if (e.target.name === "ingredients") {
      const updatedIngredients = [...recipe.ingredients];
      updatedIngredients[index] = e.target.value;
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        ingredients: updatedIngredients,
      }));
    } else {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [e.target.name]: e.target.value,
      }));
    }
  };


  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(recipe);
    try {
      await updateRecipe(recipeId, recipe);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate("/community-recipe");
      }, 2500);
    } catch (error) {
      console.error("Error updating recipe:", error);
      // Handle error
    }
  };


  return (
    <div>
      {recipe && recipe.ingredients && (
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={recipe.title || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Calories"
              variant="outlined"
              name="calories"
              value={recipe.calories || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
              <FormControl fullWidth margin="normal">
            <InputLabel id="mealType-label">Meal Type</InputLabel>
            <Select
              labelId="mealType-label"
              id="mealType"
              name="mealType"
              value={recipe.mealType}
              onChange={handleInputChange}
            >
              {mealTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            {recipe.ingredients.map((ingredient, index) => (
              <TextField
                key={index}
                label="Ingredient"
                variant="outlined"
                name="ingredients"
                value={ingredient}
                onChange={(e) => handleInputChange(e, index)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton onClick={handleAddIngredient}>
              <AddCircleOutlineIcon />
            </IconButton>
            <TextField
              label="Image URL"
              variant="outlined"
              name="image"
              value={recipe.image || ""}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <SubmitButton variant="contained" type="submit">
              Update Recipe
            </SubmitButton>
          </form>
        </FormContainer>
      )}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={() => setShowSuccessMessage(false)}
      >
        <MuiAlert onClose={() => setShowSuccessMessage(false)} severity="success">
          The recipe was updated successfully
        </MuiAlert>
      </Snackbar>
    </div>
  );


};

export default UpdateRecipe;
