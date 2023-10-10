import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Main from "./components/Main";
import SingleProduct from "./components/SoloProduct";
import AddCart from "./components/AddCart";
import Products from "./components/Products";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/item/:id"
          element={
            <>
              <Header />
              <SingleProduct />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Header />
              <Products />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <AddCart />
              <BottomNav />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Error />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
