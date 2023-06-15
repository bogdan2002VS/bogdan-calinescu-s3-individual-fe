import instance from '../axiosConfig.mjs';

export const createReview = async (recipeId, rating) => {
  try {
    const response = await instance.post(`/reviews/${recipeId}`, rating, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create/update review');
  }
};

export const getReviewByRecipeId = async (recipeId) => {
  try {
    const response = await instance.get(`/reviews/${recipeId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user review');
  }
};

export const getReviewStatistics = async (recipeId) => {
  try {
    const response = await instance.get(`/reviews/statistics/${recipeId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch review statistics');
  }
};

export const getAverageReview = async (recipeId) => {
  try {
    const response = await instance.get(`/reviews/average/${recipeId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch average review');
  }
};
