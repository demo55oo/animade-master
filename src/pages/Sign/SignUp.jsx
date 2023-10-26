import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Input, Title } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/services/register";
import { getUser } from "../../redux/services/getUser";
import { countriesCodes } from "../../utils/data";
import {
  emailMsg,
  emailValidation,
  passMsg,
  passValidation,
  userNameMsg,
  userNameValidation,
  phoneMsg,
  phoneValidation,
  confirmPassMsg,
  confirmPassValidation,
  formValidation,
} from "../../utils/validators";
import styles from "./.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    code: countriesCodes[0].dial_code,
  });

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };
  console.log(data.code);

  // Add this line to get the specific error message for the username input
  const usernameError = error?.response?.data?.username;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.page__content}>
          <Title align="center">
            <div className={styles.main__title}>
              <span>Your dream products,</span>
              <br />
              <span>made possible.</span>
            </div>
          </Title>
          <form
            className={styles.form}
            onSubmit={async (e) => {
              e.preventDefault();
              await dispatch(register(data)).then((res) => {
                if (!res?.error) {
                  setTimeout(() => {
                    navigate("/single-input");
                  }, 1000);
                }
              });
              dispatch(getUser());
            }}
          >
            <div className={styles.inputs__group}>
              <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="username"
                  onChange={(e) => inputChangeHandler(e, "username")}
                  // error={usernameError} // Use the specific username error here
                  validation={(e) => userNameValidation(e)}
                  errorMsg={userNameMsg}
                  required={true}
                  value={data?.username || ""}
                />
                <Input
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => inputChangeHandler(e, "phonenumber")}
                  // error={error?.response?.data?.phonenumber}
                  validation={(e) => phoneValidation(e)}
                  errorMsg={phoneMsg}
                  required={true}
                  value={data?.phonenumber || ""}
                  setData={setData}
                  data={data}
                />
              </div>
              <Input
                placeholder="Your Email"
                type="email"
                onChange={(e) => inputChangeHandler(e, "email")}
                // error={error?.response?.data?.email}
                validation={(e) => emailValidation(e)}
                errorMsg={emailMsg}
                required={true}
                value={data?.email || ""}
              />
              {/* <div className={styles.first__inputs}>
                <Input
                  type="text"
                  placeholder="Company (Optional)"
                  onChange={(e) => inputChangeHandler(e, "companyopitional")}
                  // error={error?.response?.data?.companyopitional}
                  value={data?.companyopitional || ""}
                />
                <Input
                  type="number"
                  placeholder="Promo Code"
                  onChange={(e) => inputChangeHandler(e, "promocode")}
                  error={error?.response?.data?.promocode}
                  value={data?.promocode || ""}
                />
              </div> */}
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "password")}
                // error={error?.response?.data?.password}
                validation={(e) => passValidation(e)}
                errorMsg={passMsg}
                required={true}
                value={data?.password || ""}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => inputChangeHandler(e, "confirmpassword")}
                error={error?.response?.data?.confirmpassword}
                validation={(e) => confirmPassValidation(e, data?.password)}
                errorMsg={confirmPassMsg}
                required={true}
                value={data?.confirmpassword || ""}
              />
            </div>
            <button
              type="submit"
              className={`${styles.login__btn} ${isLoading ? styles.loading : ""}`}
              disabled={
                isLoading ||
                !formValidation(
                  userNameValidation(data?.username),
                  phoneValidation(data?.phonenumber),
                  emailValidation(data?.email),
                  passValidation(data?.password),
                  confirmPassValidation(data?.confirmpassword, data?.password)
                )
              }
            >
              {isLoading ? (
                <span className={styles.loader}></span>
              ) : (
                <>
                  Sign Up for FREE
                  <AiOutlineLogin className={styles.login__icon} />
                </>
              )}
            </button>
            {/* Display the specific username error message */}
            {usernameError && <p className={styles.error__message}>{usernameError}</p>}
            {/* {error && <p className={styles.error__message}>{error.message}</p>} */}
            <Link to="/login" className={styles.text__}>
              Have an account?
              <span> Sign In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
