import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../LoginGuard/.module.scss";
import { toast } from "react-toastify";

const AuthGuard = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!token) {
        navigate("/login");
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [navigate, token]);

  if (!token){
    toast.success("you need to login", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast__fiy",
    });
    return (
      <div className="container">
        <h4 className={styles.title}>You need to login!</h4>
      </div>
    );
    }
  if (token) return children;
};

export default AuthGuard;
