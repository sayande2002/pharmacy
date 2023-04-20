import React from "react";
import { BsSearch } from "react-icons/bs";
import Button from "components/button";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./home-search.scss";

const HomeSearch = React.forwardRef((_, ref) => {
  const navigate = useNavigate();
  return (
    <form className="home-search">
      <span className="absolute top-2 left-2 text-2xl">
        <BsSearch />
      </span>
      <input
        ref={ref}
        className="home-search-input"
        type="Search"
        placeholder="Search medicines & health products"
        onFocus={() => navigate("/shop")}
      />
      <Button
        className="absolute top-0 right-0 bottom-0 overflow-hidden rounded-lg z-10"
        buttonType="inverted"
        type="submit"
      >
        <SearchIcon />
      </Button>
    </form>
  );
});

export default HomeSearch;
