import React, { useState } from "react";
import { Button, Input, Title ,Inputy} from "../";
import styles from "./.module.scss";
import axios from "axios";  // Import axios
import { customAlert } from "../../utils/alert";

const ContactUs = () => {
  const [data, setData] = useState({});

  const inputChangeHandler = (e, id) => {
    setData({
      ...data,
      [id]: e.target.value,
    });
  };

  let validate = true;

  if (
    data?.name?.length > 0 &&
    data?.email?.includes("@" && ".") &&
    data?.email?.slice(-1) !== "." &&
    data?.number?.length > 4 &&
    data?.message?.length > 0
  ) {
    validate = false;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const emailData = {
      subject: "New Contact Us Message",
      message: `From: ${data.name}, Phone: ${data.number}, Message: ${data.message}`,
      recipient: data.email,
    };

    axios.post(" https://backednlatestanimade-production.up.railway.app/api/send_email/", emailData)
      .then(response => {
        customAlert("Email sent successfully", "success");
        console.log(response.data);
      })
      .catch(error => {
        // customAlert(res?.error?.message, "error");
        console.log(error);
      });
  };
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Title align="center">
        <div class={styles.container}>
  <span>Contact</span>
  <div>Us</div>
</div>
          <div className={styles.tean}>Let us know what you think.</div>
        </Title>
        <form
          onSubmit={formSubmitHandler} 
          className={styles.contact__form}
        >
            <Inputy
              type="text"
              name="Full Name"
              placeholder="Your Name"
              onChange={(e) => inputChangeHandler(e, "name")}
              validation={(e) => e.length > 0}
              errorMsg="This Field Can't Be Empty"
              required={true}
              value={data?.name || ""}
            />
            <Inputy
              type="number"
              name="Phone Number"
              placeholder="Phone number"
              onChange={(e) => inputChangeHandler(e, "number")}
              validation={(e) => e.length > 4}
              errorMsg="Number Must be More Than (4 ch)"
              required={true}
              value={data?.number || ""}
            />
          <Inputy
            placeholder="Email Address"
            name="Email"
            type="email"
            onChange={(e) => inputChangeHandler(e, "email")}
            validation={(e) => e.includes("@" && ".") && e.slice(-1) !== "."}
            errorMsg="Enter in the format:name@example.com"
            required={true}
            value={data?.email || ""}
          />{" "}
          <Inputy
            type="textarea"
            name="How can we help?"
            placeholder="Type your message..."
            onChange={(e) => inputChangeHandler(e, "message")}
            validation={(e) => e.length > 0}
            errorMsg="This Field Can't Be Empty"
            required={true}
            value={data?.message || ""}
          />
          <Button type="submit" disabled={validate}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
