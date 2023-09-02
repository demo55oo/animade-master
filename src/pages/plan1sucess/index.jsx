import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, HeaderSettings } from "../../components";
import { PaymentIcon } from "../../icons";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import titleClasses from "../Settings/.module.scss";
import styles from "./.module.scss";
import { setToken } from "../../redux/features/authSlice"; // Import your action to set the token

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the token from localStorage
    const tokenWithQuotes = localStorage.getItem("token");
    const token = tokenWithQuotes.replace(/"/g, ""); // Remove quotes
        console.log(token);
    // Dispatch the token to the Redux store
    // dispatch(setToken(token));

    // Define the data object to include in the request body
    const postData = {
      subscription_plan: "Basic",
    };

    // Send a POST request if token is available
    if (token) {
      fetch("https://animadebackenpppd-main-production.up.railway.app/api/change-subscription-plan/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type if sending JSON
          Authorization: `Token ${token}`, // Include the authorization header
        },
        body: JSON.stringify(postData), // Convert the data object to JSON and include it in the request body
      })
        .then((response) => {
          // Handle the response if necessary
        })
        .catch((error) => {
          console.error("Error sending POST request:", error);
        });
    }
  }, [dispatch]);

  const title = (
    <h5 className={titleClasses.title__header}>
      <span>
        <Link to="/settings">Settings </Link>
      </span>
      <IoIosArrowBack /> Payment & Billing
    </h5>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Use 100% of viewport height for vertical centering
      }}
    >
      <div>
        Your payment is successful, and thank you!
        <br />
        <a href="https://www.animade.world/" rel="noopener noreferrer">
          Click here to go to Home page
        </a>
      </div>
    </div>
  );
};

export default Payment;
