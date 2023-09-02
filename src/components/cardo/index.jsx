import React from "react";
import OutputCard from "../OutputCard";
import styles from "./.module.scss";

const Cardo = ({ list }) => {
  console.log("list:", list); // Add this console log to check the value of the list

  if (!list) {
    return <p>Loading...</p>;
  }

  if (list.length === 0) {
    return <p>No designs found.</p>;
  }

  return (
    <div className={styles.list}>
      {list.map((createdDesign) => (
        <OutputCard
          key={createdDesign.id}
          image={createdDesign.image}
          isSelected={false}
        />
      ))}
    </div>
  );
};

export default Cardo;
