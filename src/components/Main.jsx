import React from "react";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Footer from "./Footer";
import Feature from "./Feature";
import BottomNav from "./BottomNav";
const Main = () => {
  return (
    <div id="main">
      <Header />
      <Home />
      <Feature />
      <Services />
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Main;
