const produtReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "MY_PRODUCTS") {
    const featureData = action.payload.filter((curElem) => {
      return curElem.featured === true;
    });
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featureProducts: featureData,
    };
  }

  if (action.type === "API_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  return state;
};

export default produtReducer;
