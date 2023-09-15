import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Main from "./components/Main";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
