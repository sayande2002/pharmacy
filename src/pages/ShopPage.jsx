import React from "react";
import FormInput from "components/FormInput";
import Button from "components/button";
import SearchIcon from "@mui/icons-material/Search";

const ShopPage = () => {
  return (
    <div>
      <form className="flex justify-center">
        <FormInput label="Search Product" type="search" name="gsearch" />
        <Button buttonType="inverted" type="submit">
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default ShopPage;
