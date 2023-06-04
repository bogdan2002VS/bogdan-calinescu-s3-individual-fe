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
  
  export const sendReview = async (review) => {
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return await response.json();
  };
  