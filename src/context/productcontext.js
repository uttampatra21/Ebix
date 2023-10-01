//! for react context we need to follow 3 steps
//! 1. Create context
//! 2. Provider
//! 3. Consumer

// 1. Create Context ===>>>
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productreducer";
const AppContext = createContext();

//! 2. Provider ===>>>
// Api url
const API = `https://api.pujakaitem.com/api/products`;

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // CAlling API

  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //!   USe Effect
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//! Create Custom Hooks
const useGlobalProduct = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalProduct };
