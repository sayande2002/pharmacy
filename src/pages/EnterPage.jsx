import React from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const EnterPage = () => {
  return (
    <div className="flex  justify-center flex-wrap gap-32">
      <LoginPage />
      <SignupPage />
    </div>
  );
};

export default EnterPage;
