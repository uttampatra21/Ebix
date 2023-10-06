import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Main from "./components/Main";
import SingleProduct from "./components/SoloProduct";
import Shop from "./components/Shop";
import AddCart from "./components/AddCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item/:id" element={<SingleProduct />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<AddCart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
