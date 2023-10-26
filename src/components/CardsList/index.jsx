import React from "react";
import OutputCard from "../OutputCard";
import styles from "./.module.scss";
import Outputo from "../outputo";

const CardsList = ({ list, toggleCardSelection, selectedDesigns }) => {
  return (
    <div className={styles.list}>
      {list.map((image, i) => (
        <Outputo
          key={i}
          image={image}
          isSelected={selectedDesigns.includes(image)} // Check if it's selected
          toggleCardSelection={toggleCardSelection} // Pass the toggleCardSelection function
          // toggleCardSelection={toggleCardSelection} // Pass the toggleCardSelection function

        />
      ))}
    </div>
  );
};

export default CardsList;
