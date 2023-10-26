import React, { useState, useEffect } from "react";
import { Button, FooterBtns } from "../../components";
import ProductCard from "../../components/ProductCard";
import styles from "../ChoosePlatform/.module.scss";
import productStyles from "./.module.scss";
import productData from "./productData.json";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ChooseProdutcs = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState(null); // Store the selected variant ID
  const navigate = useNavigate();

  useEffect(() => {
    setTshirtData(productData);
  }, []);

  const handleDropdownChange = (variantId) => {
    // Set the selected variant ID when the dropdown changes
    setSelectedVariantId(variantId);
  };
  const { state } = useLocation();

  const selectedDesignsData = state?.selectedDesigns || []; // Default to an empty array if not present

  const handleclick = () => {
    // Navigate to the Upload page with the selected variant ID and selected designs as route state
    if (selectedVariantId !== null) {
      navigate(`/upload-products/${selectedVariantId}`, {
        state: { selectedDesignsData }, // Pass only selectedDesignsData
      });
    } else {
      // Handle the case when no variant is selected
      console.log("Please select a product before proceeding.");
    }
  };
  
  
  return (
    <>
      <div className={styles.page}>
        <h3 className="section__title page__title">
          Which products would you like to print on?
        </h3>
        <div
          className={`${productStyles.products__section} ${styles.platform__section}`}
        >
          <div className={styles.platform__header}>
            <h5 className={styles.platform__title}>
              Choose from your Printful Templates
            </h5>
          </div>
          <div className={styles.platform__list}>
            {tshirtData.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onSelectionChange={handleDropdownChange}
                isSelected={selectedVariantId === product["Variant ID"]} // Check if the current product is selected
              />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div>
          <button className={styles.button} onClick={handleclick}>Add Product Information</button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChooseProdutcs;
