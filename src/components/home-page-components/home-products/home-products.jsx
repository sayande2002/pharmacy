import React from "react";

const HomeProducts = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5 m-4">
      {children}
    </div>
  );
};

export default HomeProducts;
