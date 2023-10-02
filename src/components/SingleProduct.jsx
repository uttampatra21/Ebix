import React, { useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useGlobalProduct } from "../context/productcontext";
const API = `https://api.pujakaitem.com/api/products`;

const SingleProduct = () => {
  const { getSingleProduct, isSingelLoading, SingleProduct } =
    useGlobalProduct();
  console.log(SingleProduct);
  const { id } = useParams();
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div>
      <Header />
      <div className="singel-product">
        <h1>Single Product</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
