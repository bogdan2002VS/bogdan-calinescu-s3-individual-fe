import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getRecipes, deleteRecipe, searchRecipes } from "../../service/recipeService.js";
import Card from "./Card";
import TokenManager from "../../service/tokenManager.js";
import { useSelector } from "react-redux";
import {
  ButtonStyle,
  FormContainer,
  Input,
  Main,
  H1,
  Select,
} from "../../components/header/Header.styled";
import { ButtonStyleCard } from "./Card.styled";
import { Slider, Typography } from '@mui/material';

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
  color: white;
`;

const CustomSlider = styled(Slider)`
  width: 80%;
  height: 12px;
  margin: 20px auto;
`;

const CommunityRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [calorieRange, setCalorieRange] = useState([0, 5000]);
  const {role} = TokenManager.setAccessToken(window.sessionStorage.getItem('tkn'));

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const loggedUser = useSelector((state) => state.user.loggedUser);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const fetchedRecipes = await getRecipes();
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (deleteConfirmation === id) {
        await deleteRecipe(id);
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        setDeleteConfirmation(null);
      } else {
        setDeleteConfirmation(id);
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchedRecipes = await searchRecipes(query, mealType, calorieRange[0], calorieRange[1]);
      setRecipes(searchedRecipes);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleMealTypeChange = (e) => {
    setMealType(e.target.value);
  };

  const handleCalorieChange = (event, newValue) => {
    setCalorieRange(newValue);
  };
  console.log(TokenManager.setAccessToken(window.sessionStorage.getItem('tkn')))
  return (
      <>
        <Main>
          <H1>Community Recipes</H1>
          <FormContainer onSubmit={handleSearch}>
            <Input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleQueryChange}
            ></Input>
            <Select name="mealTypes" id="mealTypes" onChange={handleMealTypeChange}>
              <option value="">Select Meal Type</option>
              {mealTypes.map((meal, index) => (
                  <option key={index} value={meal}>
                    {meal}
                  </option>
              ))}
            </Select>
            <Typography id="range-slider" gutterBottom>
              Calorie Range
            </Typography>
            <CustomSlider
                value={calorieRange}
                onChange={handleCalorieChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={5000}
                step={100}
            />
            <ButtonStyle type="submit" value="Submit">
              Search
            </ButtonStyle>
          </FormContainer>

        </Main>
        <Grid>
          {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} >
                { role === "admin" ? (
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
      </>
  );
};

export default CommunityRecipe;