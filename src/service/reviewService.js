import { getRecipes } from "../service/recipeService.js"; // Update with the actual API service file
const BASE_URL = 'http://localhost:8080';
export const createReview = async (review) => {
  const { recipeId, ...reviewData } = review; // Destructure the recipeId from the review object

  const response = await fetch(`${BASE_URL}/reviews?recipeId=${recipeId}`, { // Pass the recipeId as a query parameter
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData), // Send the review data without the recipeId
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
 
export const getReviewStatistics = async (recipeId) => {
  const response = await fetch(`${BASE_URL}/reviews/statistics/${recipeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const getAllRecipesWithStatistics = async () => {
  const recipes = await getRecipes();

  const recipesWithStatistics = await Promise.all(
    recipes.map(async (recipe) => {
      const recipeId = recipe.id;
      const reviewStatistics = await getReviewStatistics(recipeId);

      return { ...recipe, statistics: reviewStatistics };
    })
  );

  return recipesWithStatistics;
};