import React from "react";
import loader from "../images/loader.gif";

const LoadingPage = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default LoadingPage;
