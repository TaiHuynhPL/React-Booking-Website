import React from "react";
import styles from "./HeaderInputSearch.module.css";

//Component nút search
const HeaderInputSearch = () => {
  //hàm khi click vào nút search để chuyển sang ttrang search
  const handlerSearch = () => {
    window.location.replace("http://localhost:3000/search");
  };
  return (
    <div className={styles.headerInputSearch} onClick={handlerSearch}>
      Search
    </div>
  );
};

export default HeaderInputSearch;
