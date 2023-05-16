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


export const getRecipes = async (recipe) => {
    const response = await fetch(`${BASE_URL}/recipes`, {
      method: 'GET',
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
  