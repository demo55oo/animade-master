import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/services/logout";
import { customAlert } from "../../utils/alert";
import styles from "./.module.scss";

const Header = () => {
  const { token, isLoaing } = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logo__img} src={Logo} alt="logo" />
        </Link>
        <div className={styles.left__nav}>
          <ul
            className={`${styles.links__list} ${openMenu ? styles.open : ""}`}
          >
            <li>
              <Link to="/">How it Works</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            {/* {token ? (
              <li>
                <button
                  onClick={async () =>
                    await dispatch(logout()).then((res) => {
                      if (!res?.error) {
                        customAlert("Success Logout!", "success");
                      } else {
                        customAlert(res?.error?.message, "error");
                      }
                    })
                  }
                  className={styles.logout__btn}
                  disabled={isLoaing}
                >
                  {isLoaing ? <span className="spinner"></span> : "Logout"}
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">Log In</Link>
              </li>
            )} */}
          </ul>
          <button
            className={styles.toggle__menu}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <Button to="/single-input">Create products</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
