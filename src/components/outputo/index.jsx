import React, { useState } from "react";
import Image from "../../assets/Rectangle 4.png";
import styles from "./.module.scss";
import Mody from "../mody"; // Update this to the correct file name and path
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addCreatedDesign } from "../../redux/services/addsaveddesigns";

const Outputo = ({ isSelected, image , toggleCardSelection}) => {
  const [selected, setSelected] = useState(isSelected);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleDownloadImage = async () => {
    try {
      const response = await fetch(`https://backednlatestanimade-production.up.railway.app/download_image/?image_url=${encodeURIComponent(image)}`);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement("a");
        a.href = url;
        a.download = "downloaded_image.png"; // Set the desired filename
        document.body.appendChild(a);
  
        // Click the anchor element to initiate the download
        a.click();
  
        // Clean up by revoking the temporary URL
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to download image");
      }
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  
  const handleCardClick = () => {
    setPopupOpen(false);
    setSelected((prev) => !prev)
  };

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
        onClick={() =>toggleCardSelection(image)}
      >
      <div className={styles.downloadButton}>
        <button className={styles.button} type="button" onClick={handleDownloadImage}>
        </button>
        </div>
        <img src={image || Image} alt="" onClick={handleCardClick} />
      </div>
        {/* Add the download button here */}
     
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
