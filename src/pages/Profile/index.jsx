import React, { useEffect, useState } from "react";
import { Button, CardsList, FooterBtns } from "../../components";
import { RocketIcon } from "../../icons";
import DefaultImage from "../../assets/profile.png";
import styles from "./.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCreatedDesigns } from "../../redux/services/getCreatedDesigns";
import { Cardo } from "../../components";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the token from local storage
    const tokenWithQuotes = localStorage.getItem("token");
    const token = tokenWithQuotes.replace(/"/g, ""); // Remove quotes

    if (token) {
      // Send a GET request to retrieve user data
      fetch("https://animadebackenpppd-main-production.up.railway.app/api/users/profile/", {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`, // Include the token without quotes
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Store the user data in the state
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  console.log(user);
  const designs = useSelector((state) => state.user.createdDesigns);

  return (
    <>
      <div className={styles.page}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.user__details}>
              <img
                src={DefaultImage}
                alt="user__image"
                className={styles.user__image}
              />
              Hello, {user?.username || "User"}
            </div>
            <div className={styles.rigth__header}>
              <Button to="/pricing">Upgrade</Button>
              <div className={styles.rocket__box}>
                <span className={styles.design}>{userData?.designs_remaining || 0} designs</span>
                <span className={styles.design}>{userData?.subscription_plan || "unknown"} plan</span>
                <RocketIcon />
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.content}>
          <h3 className="section__title">Past Designs (2 Months)</h3>
          <Cardo list={designs} />
        </div>
      </div>
      <FooterBtns>
        <div>
          <Button to="/">Create Products</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default Profile;
