import React, { useState } from "react"; // Make sure to import useState
import { Button, Input } from "../";
import { IoCaretForwardOutline } from "react-icons/io5";
import styles from "./.module.scss";

const GenerateForm = ({
  type,
  placeholder,
  onSubmit,
  setData,
  data,
  loading,
  max,
  model,
  availableModels,
}) => {
  const [extraWords, setExtraWords] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      ...data,
      extraWords: extraWords.split(",").map((word) => word.trim()), // Split the extra words into an array and trim whitespace
    };
    const requestDatadec = {
      decrement_value: data.samples, // Assuming 'samples' contains the number you want to send
    };
    // Add a new field "generatedSamples" to the requestData object
    requestData.generatedSamples = requestData.samples || 1; // Use "samples" value as the number of generated samples, default to 1 if not available
    const tokenWithQuotes = localStorage.getItem("token");
    const token = tokenWithQuotes.replace(/"/g, ""); // Remove quotes
        console.log(token);

    if(token){
    // Make the POST request to www.test.com/test with the requestData
    fetch("https://animadebackenpppd-main-production.up.railway.app/api/decrease-designs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`, // Include the authorization header

      },
      body: JSON.stringify(requestDatadec),
    })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
    }
    onSubmit(requestData);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className={styles.form}
    >
      <Input
        type="textarea"
        value={data?.prompt || ""}
        placeholder={placeholder}
        onChange={(e) => setData({ ...data, prompt: e.target.value })}
        required={true}
      />
      <div className={styles.form__control}>
        {model ? (
          <></>
        ) : (
          <>
            <span>Images per prompt</span>
            <input
              type="number"
              required
              min="1"
              max={max || "4"}
              value={data?.samples || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  samples: e.target.value,
                  n: +e.target.value,
                })
              }
            />
          </>
        )}
        <Button color="purple" type="submit" loading={loading}>
          <div className={styles.generat__btn}>
            {type === "ai" ? "Ask Ai" : "Generate"}
            <IoCaretForwardOutline />
          </div>
        </Button>
      </div>
    </form>
  );
};

export default GenerateForm;
