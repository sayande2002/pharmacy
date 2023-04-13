import React from "react";
import medicine from "../assests/category/medicine.jpg";
import beauty from "../assests/category/beauti-products.jpg";
import ayurveda from "../assests/category/ayurveda-products.jpg";
import supplement from "../assests/category/health-suppliment.jpg";
import Directory from "components/home-page-components/directory/directory.component";

const categories = [
  {
    id: 1,
    title: "Medicines",
    routes: "medicine",
    imageUrl: medicine,
  },
  {
    id: 2,
    title: "Beauty Products",
    routes: "beauty",
    imageUrl: beauty,
  },
  {
    id: 3,
    title: "Ayurveda Products",
    routes: "ayurveda",
    imageUrl: ayurveda,
  },
  {
    id: 4,
    title: "Health Supplement",
    routes: "supplement",
    imageUrl: supplement,
  },
];

const HomePage = () => {
  return <Directory categories={categories} />;
};

export default HomePage;
