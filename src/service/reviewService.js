import instance from '../axiosConfig.mjs';

export const createReview = async (recipeId, review) => {
  try {
    const response = await instance.post(`/reviews/${recipeId}`, review, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create review');
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
