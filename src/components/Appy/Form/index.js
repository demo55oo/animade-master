import React from "react";
import FormElement from "./FormElement";
import "./style.css";
const formEls = [
  "Enter Prompt",
  "Create a profile & Save image",
  "Link Printful to Animade Account",
  "Choose your products & Add descriptions",
  "Launch products to your store"
];
const Form = ({ currentIndex, handleNext, handleComplete }) => {
  return (
    <div className="form-container">
      <h3>{formEls[currentIndex]}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      {currentIndex === formEls.length - 1 ? (
        <FormElement
          value={"Complete"}
          onClick={() => handleComplete(currentIndex)}
        />
      ) : (
        <FormElement value={"Next"} onClick={() => handleNext(currentIndex)} />
      )}
    </div>
  );
};

export default Form;
