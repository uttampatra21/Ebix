import React from "react";
import { UseFilterContex } from "../context/filter-context";
import Gridview from "./views/Gridview";
// import Listview from "./view/Listview";
const Productlist = () => {
  const { setGridView, filter_products } = UseFilterContex();
  if (setGridView) {
    return <Gridview product={filter_products} />;
  }
  // if (setGridView === false) {
  //   return <Listview />;
  // }
};

export default Productlist;
