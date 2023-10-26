import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./.module.scss";

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./.module.scss";

const ProductCard = ({ product, onSelectionChange, isSelected }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(product[0]); // Initialize with the default product
  const [click, setClick] = useState(false); // Track click state

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);

    // Find the selected product based on color and size
    const updatedProduct = product.find(
      (p) => p["Product Color"] === newColor && p["Product Size"] === selectedSize
    );

    // Update the selected product and call the onSelectionChange callback
    if (updatedProduct) {
      setSelectedProduct(updatedProduct);

      if (onSelectionChange) {
        onSelectionChange(
          updatedProduct["Variant ID"],
          updatedProduct["Product Price"],
          updatedProduct["Product Image"]
        );
      }
    }
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);

    // Find the selected product based on color and size
    const updatedProduct = product.find(
      (p) => p["Product Color"] === selectedColor && p["Product Size"] === newSize
    );

    // Update the selected product and call the onSelectionChange callback
    if (updatedProduct) {
      setSelectedProduct(updatedProduct);

      if (onSelectionChange) {
        onSelectionChange(
          updatedProduct["Variant ID"],
          updatedProduct["Product Price"],
          updatedProduct["Product Image"]
        );
      }
    }
  };

  const handleClick = () => {
    // Change the background color and border width on click
    setClick(!click);

    // Save the Variant ID of the selected product
    if (onSelectionChange) {
      onSelectionChange(
        selectedProduct["Variant ID"],
        selectedProduct["Product Price"],
        selectedProduct["Product Image"]
      );
    }
  };

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""} ${click ? styles.click : ""}`}
      onClick={handleClick}
    >
      <img
        className={styles.box}
        src={selectedProduct["Product Image"]}
        alt={selectedProduct["Product Name"]}
      />
      <div className={`${styles.box} ${styles.box__info}`}>
        <div className={styles.template__name}>{selectedProduct["Product Name"]}</div>
        <div className={styles.product__name}>
          <select             className={styles.currencyDropdown}
 value={selectedColor} onChange={handleColorChange}>
            <option value="">Select Color</option>
            {product.map((p) => (
              <option key={p["Variant ID"]} value={p["Product Color"]}>
                {p["Product Color"]}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.product__details}>
          <select className={styles.currencyDropdown}
 value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            {product.map((p) => (
              <option key={p["Variant ID"]} value={p["Product Size"]}>
                {p["Product Size"]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.box}>
        <Link to="/">
          ${selectedProduct["Product Price"]}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
