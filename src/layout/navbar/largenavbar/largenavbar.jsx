import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewTooltip from "lib/tooltip";
import { navbarLists } from "layout/navbar/navbarLists";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const LargeNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="ml-auto hidden items-center justify-between gap-6 md:flex mx-2">
        {navbarLists.map(({ id, name, component, route }) => (
          <NewTooltip key={id} title={name}>
            <Link
              className="font-semibold text-black no-underline focus:border-b-2 focus:border-black"
              to={route}
            >
              {name}
            </Link>
          </NewTooltip>
        ))}

        <div
          className="relative flex rounded-[50%] p-2 cursor-pointer"
          // onClick={() => setOpen((prev) => !prev)}
          onClick={() => navigate("/cart")}
        >
          <NewTooltip title="My Cart">
            <ShoppingCartOutlinedIcon
              style={{ fill: "black", fontSize: "30px" }}
            />
            <span className="absolute	top-[1px] right-[0px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-red-600 text-xs font-light text-white">
              0
            </span>
          </NewTooltip>
          {/* {open && <CartDropdown setOpen={setOpen} />} */}
        </div>
      </nav>
    </>
  );
};

export default LargeNavbar;
