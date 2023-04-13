import React from "react";
import { Link } from "react-router-dom";
import NewTooltip from "../../lib/tooltip.jsx";
import LargeNavbar from "./largenavbar/largenavbar.jsx";
import SmallNavbar from "./smallnavbar/smallnavbar.jsx";
import Button from "components/button.jsx";
import ScrollTop from "layout/scrollTop/scrollTop.jsx";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 z-50 flex h-[100px] w-full flex-row border-t-[3px]
      border-b border-solid border-b-[#e0e0e0]
       bg-white uppercase no-underline shadow-[0_3px_6px_0_rgb(0_0_0_/_20%)]"
    >
      <SmallNavbar />
      <Link
        className="flex items-center justify-center px-8 py-0 text-2xl font-bold text-[black] no-underline"
        to="/"
      >
        <NewTooltip title="Go Home">Pharmacy</NewTooltip>
      </Link>
      <LargeNavbar />
      <div className="ml-auto mr-3 flex items-center justify-center gap-3">
        {document.cookies ? (
          <Link to="/login">
            <NewTooltip title="Log Out">
              <Button buttonType="inverted">Log Out</Button>
            </NewTooltip>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <NewTooltip title="Log In">
                <Button buttonType="inverted">Log In</Button>
              </NewTooltip>
            </Link>
            <Link to="/signup">
              <NewTooltip title="Sign Up">
                <Button buttonType="inverted">Sign Up</Button>
              </NewTooltip>
            </Link>
          </>
        )}
      </div>
      <ScrollTop />
    </header>
  );
};

export default Navbar;
