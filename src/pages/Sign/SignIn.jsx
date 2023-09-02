import React, { useState } from "react";
import { Title, Input, Modal, Button } from "../../components";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/services/login";
import styles from "./.module.scss";
import { getUser } from "../../redux/services/getUser";
import api from "../../api";
import {
  // emailMsg,
  emailValidation,
  formValidation,
  userNameMsg,
  userNameValidation,
} from "../../utils/validators";
import { customAlert } from "../../utils/alert";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoaing } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(data)).then((res) => {
      if (!res?.error) {
        setTimeout(() => {
          navigate("/single-input");
        }, 1000);
      }
    });
    dispatch(getUser());
  };

  const sendEmail = async () => {
    setloading(true);
    try {
      await api.post("/password_reset/", { email });
      setloading(false);
      customAlert("check Your Email !", "success");
      navigate("/reset__password");
    } catch (error) {
      setloading(false);
      customAlert(error?.response?.data?.email[0], "error");
    }
  };

  return (
    <>
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
            <form className={styles.form} onSubmit={submitFormHandler}>
              <div className={styles.inputs__group}>
                <Input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => inputChangeHandler(e, "username")}
                  error={error?.response?.data?.username}
                  validation={(e) => userNameValidation(e)}
                  errorMsg={userNameMsg}
                  required={true}
                  value={data?.username || ""}
                />
                {/* <Input
                  placeholder="Your Email"
                  type="email"
                  onChange={(e) => inputChangeHandler(e, "email")}
                  error={error?.response?.data?.email}
                  validation={(e) => emailValidation(e)}
                  errorMsg={emailMsg}
                  required={true}
                  value={data?.email || ""}
                /> */}
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => inputChangeHandler(e, "password")}
                  value={data.password || ""}
                  error={error?.response?.data?.password}
                  required={true}
                />
              </div>
              <button
                type="button"
                onClick={() => setOpenPopup(true)}
                className={styles.forget__pass}
              >
                Forgot Password
              </button>
              <button
                type="submit"
                className={`${styles.login__btn} ${
                  isLoaing ? styles.loading : ""
                }`}
                disabled={
                  isLoaing ||
                  !formValidation(
                    // emailValidation(data?.email),
                    userNameValidation(data?.username),
                    data.password
                  )
                }
              >
                {isLoaing ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>
                    Sign In
                    <AiOutlineLogin className={styles.login__icon} />
                  </>
                )}
              </button>
              {error && (
                <p className={styles.error__message}>{error?.message}</p>
              )}
              <Link to="/register" className={styles.text__}>
                Not a member?
                <span> Sign up now</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
      {openPopup && (
        <Modal
          setState={setOpenPopup}
          title="What is the email associated with your account"
          buttons={
            <div className={styles.btns}>
              <Button
                onClick={() => setOpenPopup(false)}
                type="button"
                color="gray"
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={!emailValidation(email) || loading}
                loading={loading}
                onClick={sendEmail}
              >
                Send
              </Button>
            </div>
          }
        >
          <div className={styles.input}>
            <label>Your Email</label>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              value={email || ""}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
