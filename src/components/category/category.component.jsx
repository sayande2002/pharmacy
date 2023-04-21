import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import {
//   selectCategoriesMap,
//   selectIsLoading,
// } from "../../store/categories/categories.selector";

import "./category.styles.scss";
import Spinner from "components/spinner";
import ProductCard from "components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  // const categoriesMap = useSelector(selectCategoriesMap);
  // const isLoading = useSelector(selectIsLoading);
  // const [products, setProducts] = useState(categoriesMap[category]);
  const [products, setProducts] = useState();
  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {
        // isLoading ? (
        //   <Spinner />
        // ) : (
        <div className="category-container">
          {products &&
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      }
    </Fragment>
  );
};

export default Category;
