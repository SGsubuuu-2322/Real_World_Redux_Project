import axios from "axios";
import { getProducts } from "../reducers/productReducer";

export const asyncGetProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(getState());
    dispatch(getProducts(res.data));
  } catch (err) {
    console.log(err);
  }
};
