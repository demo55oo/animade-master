import React, { useState, useRef, useEffect } from "react";
import { countriesCodes } from "../../utils/data";
import styles from "./.module.scss";

const AreaCode = ({ data, setData }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);

  // Function to close the menu when clicking outside the menu
  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  // Add click event listener to handle clicks outside the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className={styles.select__box} ref={menuRef}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {data?.code}
      </button>
      {openMenu && (
        <ul className={styles.menu}>
          {countriesCodes.map((country, i) => (
            <li
              className={`${styles.item} ${
                data.code === country.dial_code ? styles.active : ""
              }`}
              key={i}
              onClick={() => {
                setData({
                  ...data,
                  code: country.dial_code,
                });
                setOpenMenu(false); // Close the menu after selecting an area code
              }}
            >
              {country.dial_code} | {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AreaCode;
