import { useState } from "react";

import Step from "./Step";
import Slider from "./Slider";
import Form from "./Form";
import "./styles.css";
import { Button, Title } from "..";

const Appy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <div className="sr">
    <div className="doro">
    <Title> Step-By-Step Guide </Title>
  <Title><span>to Uploading Products </span></Title>
  </div>
    <div className="App">
      <div className="conto">
        <Step currentIndex={currentIndex} />
      </div>
      <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />

      <div className="form-container">
        <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
        />
      </div>
    </div>
    </div>
  );
}

export default Appy;