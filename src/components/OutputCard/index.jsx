import React, { useState, useEffect } from "react";
import Image from "../../assets/Rectangle 4.png";
import styles from "./.module.scss";
import Mody from "../mody";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { printfulAuth } from "../../redux/services/printfulAuth";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const OutputCard = ({ isSelected, image }) => {
  const [selected, setSelected] = useState(isSelected);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
    const location = useLocation();

    const { access_token, products, error, loadind } = useSelector(
      (state) => state.printful
    );
    const token = location.search.slice(
      location.search.indexOf("=", 7) + 1,
      location.search.indexOf("&", 10)
    );
    
  useEffect(() => {
    if (token && !access_token) {
      dispatch(printfulAuth(token));
    }
  }, [access_token, dispatch, token]);
  
  const handleImageClick = () => {
    setPopupOpen(true);
    setDescription("");
    setPrice("");
  };

  const handleSaveImage = async () => {
    if (image && description && price) {
      // Perform actions with the uploaded image, description, and price
      console.log("Uploaded image:", image);
      console.log("Description:", description);
      console.log("Price:", price);

      try {
        

        const productPayload = {
          sync_product: {
            name: description,
            thumbnail: image,
          },
          sync_variants: [
            {
              retail_price: parseFloat(price),
              variant_id: 4011,
              files: [
                {
                  url: image,
                },
              ],
            },
          ],
        };

        const createProductResponse = await axios.post(
          `https://api.printful.com/store/products`,
          productPayload,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        console.log("Printful response:", createProductResponse.data);

        // TODO: Add logic for success handling

        setPopupOpen(false);
      } catch (error) {
        console.error("Printful error:", error);

        // TODO: Add logic for error handling
      }
    }
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
          setState={() => setPopupOpen(false)}
          buttons={
            <div className={styles.sameLine}>
              <Button type="button" onClick={handleSaveImage}>
                Upload Image
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
            <label>Enter name/description:</label>
            <Input
              type="text"
              placeholder="Enter the name or description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className={styles.input}>
            <label>Enter retail price:</label>
            <Input
              type="number"
              placeholder="Enter the retail price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </Mody>
      )}
    </>
  );
};

export default OutputCard
