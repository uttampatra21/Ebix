// for react context we need to follow 3 steps
// 1. Create context
// 2. Provider
// 3. Consumer

// 1. Create Context ===>>>
import { createContext, useContext } from "react";

const AppContext = createContext();

// 2. Provider ===>>>
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="uttam">{children}</AppContext.Provider>;
};

// Create Custom Hooks
const useGOlobalProduct = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGOlobalProduct };
