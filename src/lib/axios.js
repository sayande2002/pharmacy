import axios from "axios";
const request = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export default request;
