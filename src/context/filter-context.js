import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalProduct } from "./productcontext";
import reducer from "../reducer/filterReducer";
//! for react context we need to follow 3 steps
//! 1. Create context
//! 2. Provider
//! 3. Consumer

//!------- 1. Create context
const FilterContext = createContext();

//! ------ Use Reducer Hook(Step-2)
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

//!------ 2. Provider
export const FilterContextProvider = ({ children }) => {
  //! ------Fetch Products Api
  const { products } = useGlobalProduct();

  //* To set GRID view ;

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //* ------ Use Reducer Hook(Initilaziton Step-1)
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

//!------ 3. Consumer
export const UseFilterContex = () => {
  return useContext(FilterContext);
};
