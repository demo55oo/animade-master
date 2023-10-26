import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/services/logout";
import { customAlert } from "../../utils/alert";
import styles from "./.module.scss";

// import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/services/logout";
// import { customAlert } from "../../utils/alert";
// import styles from "./Header.module.scss";

const Header = () => {
  const { token, isLoaing } = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <Navbar expand="md" className={styles.header}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.logo}>
          <img className={styles.logo__img} src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setOpenMenu((prev) => !prev)}
          className={styles.toggle__menu}
        >
          {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ml-auto ${openMenu ? styles.open : ""}`}>
            {/* Your navigation links go here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
