const initialState = {
    recipes: [],
    loading: false,
    error: null,
  }
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUEST':
        return { ...state, loading: true };
      case 'SUCCESS':
        return { ...state, loading: false, recipes: action.payload };
      case 'FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }
  
  export default recipeReducer;