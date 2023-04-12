import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <div className="mt-36">{children}</div>
    </>
  );
};

export default Layout;
