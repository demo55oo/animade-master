import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./.module.scss";

const LoginGuard = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (token) {
        navigate("/");
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [navigate, token]);

  if (token)
    return (
      <div className="container">
        <h4 className={styles.title}>You logged in now!</h4>
      </div>
    );

  if (!token) return children;
};

export default LoginGuard;
