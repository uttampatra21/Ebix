import { createContext, useContext, useReducer } from "react";
import { useGlobalProduct } from "./productcontext";
//! for react context we need to follow 3 steps
//! 1. Create context
//! 2. Provider
//! 3. Consumer
//!------- 1. Create context
const FilterContext = createContext();

//! ------ Use Reducer Hook(Step-2)
const initialState = {
    filter_products: [],
}

//!------ 2. Provider
export const FilterContextProvider = ({ children }) => {
  //! ------Fetch Products Api
  const { products } = useGlobalProduct();
  console.log(products);

  //! ------ Use Reducer Hook(Initilaziton Step-1)
  const [state, dispatch] = useReducer(reducer, initialState);


  return <FilterContext.Provider value={...state}>{children}</FilterContext.Provider>;
};

//!------ 3. Consumer
export const UseFilterContex = () => {
  return useContext(FilterContext);
};
