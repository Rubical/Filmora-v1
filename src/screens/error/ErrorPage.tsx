import React, { FC } from "react";
import errorImg from "./error-404.jpg";

const ErrorPage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "80px",
        minHeight: "80vh",
        flexWrap: "wrap",
        padding: "200px",
      }}
    >
      <img src={errorImg} alt="error" />
    </div>
  );
};

export default ErrorPage;
