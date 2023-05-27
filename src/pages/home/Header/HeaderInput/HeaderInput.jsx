import React from "react";

import HeaderInputContent from "./HeaderInputContent/HeaderInputContent";
import HeaderInputSearch from "./HeaderInputSearch/HeaderInputSearch";
import styles from "./HeaderInput.module.css";

//Component input chứa phần nhập input và nút search
const HeaderInput = () => {
  return (
    <form className={styles.headerInput}>
      <HeaderInputContent></HeaderInputContent>
      <HeaderInputSearch></HeaderInputSearch>
    </form>
  );
};

export default HeaderInput;
