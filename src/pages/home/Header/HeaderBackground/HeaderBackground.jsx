import React from "react";

import styles from "./HeaderBackground.module.css";

//Component nền background
function HeaderBackground() {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.container}>
        <h2 className={styles.title}>A lifetime of discounts? It's Genius.</h2>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <div className={styles.link}>Sign in / Register</div>
      </div>
    </div>
  );
}

export default HeaderBackground;
