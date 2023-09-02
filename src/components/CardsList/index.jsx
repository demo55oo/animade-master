import React from "react";
import OutputCard from "../OutputCard";
import styles from "./.module.scss";
import Outputo from "../outputo";

const CardsList = ({ list, isSelected }) => {
  return (
    <div className={styles.list}>
      {list.map((image, i) => (
        <Outputo key={i} image={image} isSelected={isSelected} />
      ))}
    </div>
  );
};

export default CardsList;
