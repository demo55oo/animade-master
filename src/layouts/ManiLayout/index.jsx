import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";
// import styles from "./.module.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
