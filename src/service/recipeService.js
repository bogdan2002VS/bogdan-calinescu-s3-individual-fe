const BASE_URL = 'http://localhost:8080';

export const createRecipe = async (recipe) => {
  const response = await fetch(`${BASE_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};



export const getRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const deleteRecipe = async (recipeId) => {
  const response = await fetch(`${BASE_URL}/recipes/${recipeId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export const updateRecipe = async (recipeId, recipe) => {
  const response = await fetch(`${BASE_URL}/recipes/${recipeId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};


export const searchRecipes = async (title, mealType, caloriesFrom, caloriesTo) => {
  const url = `${BASE_URL}/recipes/search?title=${encodeURIComponent(title)}&mealType=${encodeURIComponent(
    mealType
  )}&caloriesFrom=${encodeURIComponent(caloriesFrom)}&caloriesTo=${encodeURIComponent(caloriesTo)}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};



