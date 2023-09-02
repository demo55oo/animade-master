import React, { useState } from "react";
import styles from "./.module.scss";

const HeaderSettings = ({ title }) => {
  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    // Add more currencies as needed
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {title}
        <div className={styles.header__links}>
          <span>Currency</span>
          <select
            className={styles.currencyDropdown}
            value={selectedCurrency.code}
            onChange={(e) => {
              const selectedCode = e.target.value;
              const selectedCurrency = currencies.find(
                (currency) => currency.code === selectedCode
              );
              handleCurrencyChange(selectedCurrency);
            }}
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code} {currency.symbol}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSettings;
