import React from "react";

const steps = [
  "Enter Prompt",
  "Create a profile & Save image",
  "Link Printful to Animade Account",
  "Choose your products & Add descriptions",
  "Launch products to your store"
];

const Step = ({ currentIndex }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "white" : "grey";
        console.log("color", color);
        return (
          <div className="steps-item">
            <h3
              style={{
                margin: 0,
                color: color
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
