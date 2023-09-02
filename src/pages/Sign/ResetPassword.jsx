import React, { useState } from "react";
import { Title, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import styles from "./.module.scss";
import { customAlert } from "../../utils/alert";
import api from "../../api";
import {
  passMsg,
  passValidation,
  confirmPassMsg,
  confirmPassValidation,
  formValidation,
} from "../../utils/validators";

const ResetPassword = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    setError(false);
    try {
      await api.post("/password_reset/confirm/", {
        token: data.token,
        password: data.password,
      });
      setloading(false);
      customAlert("Reset Your Password successfully !", "success");
      setData({});
      navigate("/");
    } catch (error) {
      setloading(false);
      setError(error);
      customAlert(error?.response?.data?.detail, "error");
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className="container">
          <div className={styles.page__content}>
            <Title align="center">
              <div className={styles.main__title}>Check your email</div>
            </Title>
            <form className={styles.form} onSubmit={submitFormHandler}>
              <div className={styles.inputs__group}>
                <Input
                  type="text"
                  placeholder="Enter Your Token"
                  onChange={(e) =>
                    setData({
                      ...data,
                      token: e.target.value,
                    })
                  }
                  error={error?.response?.data?.detail}
                  value={data?.token || ""}
                  validation={(e) => e.length > 0}
                  errorMsg="This Field Can't Be Empty"
                  required={true}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data?.password || ""}
                  error={error?.response?.data?.password}
                  validation={(e) => passValidation(e)}
                  errorMsg={passMsg}
                  required={true}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) =>
                    setData({
                      ...data,
                      confirmpassword: e.target.value,
                    })
                  }
                  error={error?.response?.data?.confirmpassword}
                  validation={(e) => confirmPassValidation(e, data?.password)}
                  errorMsg={confirmPassMsg}
                  required={true}
                  value={data?.confirmpassword || ""}
                />
              </div>
              <button
                type="submit"
                className={`${styles.login__btn} ${
                  loading ? styles.loading : ""
                }`}
                disabled={
                  loading ||
                  !formValidation(
                    data?.token,
                    passValidation(data?.password),
                    confirmPassValidation(data?.confirmpassword, data.password)
                  )
                }
              >
                {loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>Reset Your password</>
                )}
              </button>
              {error && (
                <p className={styles.error__message}>{error?.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
