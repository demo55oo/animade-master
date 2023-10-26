import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderSettings } from "../../components";
import { ManageIcon } from "../../icons";
import { settingsLinks } from "../../utils/data";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/services/logout";
import { toast } from "react-toastify";
import styles from "./.module.scss";

const Settings = () => {
  const { isLoaing } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = <h5 className={styles.title__header}>Settings</h5>;

  return (
    <div className={styles.page}>
      <HeaderSettings title={title} />
      <div className={styles.content}>
        {settingsLinks.map((link, i) => (
          <Link to={link.to} key={i} className={styles.link}>
            {link.icon}
            {link.label}
          </Link>
        ))}
        <button
          className={styles.link}
          onClick={async () =>
            await dispatch(logout()).then((res) => {
              if (!res?.error) {
                toast.success("Success Logout!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "toast__fiy",
                });
                navigate("/");
              } else {
                toast.error(res?.error.message, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "toast__fiy",
                });
              }
            })
          }
          disabled={isLoaing}
        >
          {isLoaing ? (
            <span className="spinner"></span>
          ) : (
            <>
              <ManageIcon />
              Log Out
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Settings;
