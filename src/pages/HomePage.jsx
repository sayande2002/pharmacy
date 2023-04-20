import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import medicine from "../assests/category/medicine.jpg";
import beauty from "../assests/category/beauti-products.jpg";
import ayurveda from "../assests/category/ayurveda-products.jpg";
import supplement from "../assests/category/pres.png";
import Directory from "components/home-page-components/directory/directory.component";
import HomeSearch from "components/home-page-components/home-search/home-search";
import { getHomeProducts } from "store/home-Products-Slice";
import ProductCard from "components/product-card/product-card.component";
import HomeProducts from "components/home-page-components/home-products/home-products";

const categories = [
  {
    id: 1,
    title: "Medicines",
    routes: "medicine",
    imageUrl: medicine,
  },
  {
    id: 2,
    title: "Health Care",
    routes: "healthcare",
    imageUrl: beauty,
  },
  {
    id: 3,
    title: "Categories",
    routes: "categories",
    imageUrl: ayurveda,
  },
  {
    id: 4,
    title: "Prescription",
    routes: "prescription",
    imageUrl: supplement,
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.homeProducts);
  useEffect(() => {
    dispatch(getHomeProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* {console.log("products", products)} */}
      <HomeSearch />
      <Directory categories={categories} />
      <HomeProducts>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </HomeProducts>
    </div>
  );
};

export default HomePage;
