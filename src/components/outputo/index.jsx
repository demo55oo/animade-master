import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import styles from "./.module.scss";
import Mody from "../mody"; // Update this to the correct file name and path
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addCreatedDesign } from "../../redux/services/addsaveddesigns";

const Outputo = ({ isSelected, image }) => {
  const [selected, setSelected] = useState(isSelected);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleImageClick = () => {
    setPopupOpen(true);
    setDescription("");
    setNumber("");
  };

  const handleSaveImage = () => {
    dispatch(addCreatedDesign({ image, desc: description, number }));
    setPopupOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.card} ${selected ? styles.selected : ""}`}
        onClick={() => setSelected((prev) => !prev)}
      >
        <img src={image || Image} alt="" onClick={handleImageClick} />
      </div>
      {isPopupOpen && (
        <Mody
          title="Image Popup"
          closePopup={() => setPopupOpen(false)}
          buttons={
            <div className={styles.sameLine}>
              <Button type="button" onClick={handleSaveImage}>
                Save Image
              </Button>
              <Button
                onClick={() => setPopupOpen(false)}
                type="button"
                color="gray"
              >
                Cancel
              </Button>
            </div>
          }
        >
          <img src={image || Image} alt="" />
          <div className={styles.input}>
            <label>Enter your description here:</label>
            <Input
              type="text"
              placeholder="Your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label>Enter reference number here:</label>
            <Input
              type="text"
              placeholder="Your number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </Mody>
      )}
    </>
  );
};

export default Outputo;
