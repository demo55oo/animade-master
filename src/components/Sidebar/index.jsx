import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/sLogo.png";
import { SidebarLinks } from "../../utils/data";
import { GrFormNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import { UserIcon } from "../../icons";
import styles from "./.module.scss";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div
        className={`${styles.overlay} ${openSidebar ? styles.show : ""}`}
      ></div>
      <div className={`${styles.sidebar} ${openSidebar ? styles.open : ""}`}>
        <button
          className={styles.toggle__btn}
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          {/* {openSidebar ? <GrFormPrevious /> : <GrFormNext />} */}
          <GrFormNext />
        </button>
        <div className={styles.sidebar__content}>
          <Link to="/" className={styles.logo}>
            <img src={Logo} alt="logo" />
          </Link>
          <div className={styles.list}>
            {SidebarLinks.map((link, i) => (
              <Link to={link.link || ""} key={i} className={styles.link}>
                {link.icon}
                {link.label}
              </Link>
            ))}
            <Link to="/profile" className={styles.link}>
              <UserIcon />
              {user?.username || "User"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
