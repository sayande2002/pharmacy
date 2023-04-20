import React, { useEffect, useRef } from "react";
import HomeSearch from "components/home-page-components/home-search/home-search";

const ShopPage = () => {
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <HomeSearch ref={focusRef} />
    </div>
  );
};

export default ShopPage;
