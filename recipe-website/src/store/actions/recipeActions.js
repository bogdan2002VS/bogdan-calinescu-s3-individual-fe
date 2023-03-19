export const fetchRecipesRequest = () => {
    return {
      type: 'REQUEST',
    }
  }
  
  export const fetchRecipesSuccess = (recipes) => {
    return {
      type: 'SUCCESS',
      payload: recipes,
    }
  }
  
  export const fetchRecipesFailure = (error) => {
    return {
      type: 'FAILURE',
      error: error,
    }
  }
  
  export const fetchRecipes = () => {
    return async (dispatch) => {
      dispatch(fetchRecipesRequest());
  
      try {
        const response = await fetch('');
        const data = await response.json();
        dispatch(fetchRecipesSuccess(data));
      } catch (error) {
        dispatch(fetchRecipesFailure(error));
      }
    }
  }
  