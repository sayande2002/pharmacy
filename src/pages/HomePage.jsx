import React from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const HomePage = () => {
  return (
    <div className="flex  justify-center flex-wrap gap-32">
      <LoginPage />
      <SignupPage />
    </div>
  );
};

export default HomePage;
