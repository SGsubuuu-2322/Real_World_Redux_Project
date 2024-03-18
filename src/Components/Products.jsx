// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../Store/reducers/productReducer";
import { useEffect } from "react";
import { asyncGetProducts } from "../Store/Actions/ProductsActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  const { products } = useSelector((state) => state.ProductReducer);
  //   console.log(products);

  return (
    <div className="container m-auto bg-red-200 p-10 mt-5">
      <h1 className="text-4xl text-center text-red-900">All Users:</h1>

      <ul>
        {products.map((product, index) => {
          return (
            <li key={index} className="text-xl text-red-700 text-center">
              {product.title}
              <span
                // onClick={() => handleDelete(index)}
                className="text-red-900 font-semibold ml-2 cursor-pointer font-black"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
