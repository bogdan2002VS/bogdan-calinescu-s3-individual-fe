import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextField, Button, IconButton, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardArea, { Section } from "./CreateRecipe.style";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CreateRecipe = () => {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    title: "",
    calories: "",
    ingredients: [""],
    image: ""
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e, index) => {
    if (e.target.name === "ingredients") {
      const updatedIngredients = [...recipe.ingredients];
      updatedIngredients[index] = e.target.value;
      setRecipe({ ...recipe, ingredients: updatedIngredients });
    } else {
      setRecipe({ ...recipe, [e.target.name]: e.target.value });
    }
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate("/home");
    }, 2000);
  };
  

  return (
    <CardArea>
      <Section>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={recipe.title}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Calories"
              variant="outlined"
              name="calories"
              value={recipe.calories}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
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
              value={recipe.image}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <SubmitButton variant="contained" type="submit">
              Submit Recipe
            </SubmitButton>
          </form>
        </FormContainer>
      </Section>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={() => setShowSuccessMessage(false)}
      >
        <Alert onClose={() => setShowSuccessMessage(false)} severity="success">
          The recipe was sent to be reviewed
        </Alert>
      </Snackbar>
    </CardArea>
  );
};

export default CreateRecipe;
