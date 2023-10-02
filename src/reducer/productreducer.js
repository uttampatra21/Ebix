const produtReducer = (state, action) => {
  // ! First Api CAll
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_PRODUCTS":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // ! Second API CAll

    case "SET_SINGEL_LOADING":
      return {
        ...state,
        isSingelLoading: true,
      };
    case "SET_SINGELPRODUCT":
      return {
        ...state,
        isSingelLoading: false,
        SingleProduct: action.payload,
      };
    case "API_ERROR":
      return {
        ...state,
        isSingelLoading: false,
        isError: true,
      };
    //!
    //!
    //!

    default:
      return state;

      // ! Return
      return state;
  }
};

export default produtReducer;
