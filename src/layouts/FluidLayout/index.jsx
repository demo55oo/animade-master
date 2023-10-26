import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./.module.scss";

const FluidLayout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <button className={styles.back__btn} onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default FluidLayout;
