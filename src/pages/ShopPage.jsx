import React, { useEffect, useRef, useState } from "react";
import HomeSearch from "components/home-page-components/home-search/home-search";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedProducts } from "store/search-Products-Slice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const focusRef = useRef();
  const { searchProducts } = useSelector((state) => state.searchProducts);
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  useEffect(() => {
    dispatch(getSearchedProducts(value));
  }, [dispatch, value]);
  console.log("sproducts", searchProducts);
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <HomeSearch setValue={setValue} value={value} ref={focusRef} />
      {searchProducts?.map((p) => (
        <h1>{p.title}</h1>
      ))}
    </div>
  );
};

export default ShopPage;
