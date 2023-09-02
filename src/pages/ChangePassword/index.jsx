import React, { useState } from "react";
import { Button, HeaderSettings, Input } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { customAlert } from "../../utils/alert";
// import axios from "axios";
import {
  passMsg,
  passValidation,
  confirmPassMsg,
  confirmPassValidation,
  formValidation,
} from "../../utils/validators";
import api from "../../api";
import titleClasses from "../Settings/.module.scss";
import styles from "./.module.scss";

const ChangePassword = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const updatePass = async () => {
    setLoading(true);
    try {
      const formdata = new FormData();
      formdata.append("new_password", data.new_password);
      formdata.append("old_password", data.old_password);
      const res = await api.put("/change-password/", formdata);
      setLoading(false);
      customAlert(res?.data?.message, "success");
      setData({});
      navigate("/");
    } catch (error) {
      customAlert(error?.response?.data?.old_password[0], "error");
      setLoading(false);
      return error;
    }
  };

  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings</Link>
      </span>
      <IoIosArrowBack /> Change Password
    </h5>
  );

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePass();
        }}
        className={styles.form}
      >
        <div className={styles.input__box}>
          <label>Current Password</label>
          <Input
            type="password"
            placeholder="Your Password"
            onChange={(e) =>
              setData({
                ...data,
                old_password: e.target.value,
              })
            }
            validation={(e) => passValidation(e)}
            errorMsg={passMsg}
            required={true}
            value={data?.old_password || ""}
          />
        </div>
        <div className={styles.input__box}>
          <label>New Password</label>
          <Input
            type="password"
            placeholder="New Password"
            onChange={(e) =>
              setData({
                ...data,
                new_password: e.target.value,
              })
            }
            validation={(e) => passValidation(e)}
            errorMsg={passMsg}
            required={true}
            value={data?.new_password || ""}
          />
        </div>
        <div className={styles.input__box}>
          <label>Confirm Password</label>
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setData({
                ...data,
                confirmpassword: e.target.value,
              })
            }
            validation={(e) => confirmPassValidation(e, data?.new_password)}
            errorMsg={confirmPassMsg}
            required={true}
            value={data?.confirmpassword || ""}
          />
        </div>
        <Button
          type="submit"
          loading={loading}
          disabled={
            !formValidation(
              passValidation(data?.old_password),
              passValidation(data?.new_password),
              confirmPassValidation(data?.confirmpassword, data.new_password)
            )
          }
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
