import React, { useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderInputContent.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

//Component imput các thông tin
function HeaderInputContent() {
  //sử dụng hook state để lấy giá trị ngày đi, ngày về của người dùng
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  //Sử dụng hook state để lấy biến. cho phép ẩn/hiện
  const [hiden, setHiden] = useState(true);
  //Hàm khi truyền vào 1 giá trị kiểu ngày và trả về kiểu chuỗi có mẫu tháng/ngày/năm
  const getStringDate = (dates) => {
    const date = dates.getDate();
    const month = dates.getMonth() + 1;
    const year = dates.getFullYear();
    return `${month}/${date}/${year}`;
  };
  //Hàm khi click vào ô input date để ẩn/hiện modal
  const handleInputDate = () => {
    //toán tử 3 ngôi nếu trua thì set lại false hoặc ngược lại
    hiden ? setHiden(false) : setHiden(true);
  };
  //Sử dụng hook useRef để lấy element input trong Dom để sử dụng
  const inputDateRef = useRef();
  //Sử dụng hook useEffect để thay để giá trị ô input khi có sự thay đổi của state (ngày của người dung nhập)
  useEffect(() => {
    inputDateRef.current.value = `${getStringDate(
      state[0].startDate
    )} to ${getStringDate(state[0].endDate)}`;
  }, [state]);

  return (
    <div className={styles.headerInputContentContainer}>
      <div className={styles.headerInputContentItem}>
        <FontAwesomeIcon icon="fa-bed" />
        <input placeholder="Where are you going?"></input>
      </div>

      <div className={styles.headerInputContentItem}>
        <FontAwesomeIcon icon="fa-calendar" />
        <input
          ref={inputDateRef}
          placeholder="06/24/2022 to 06/24/2022"
          onClick={handleInputDate}
        ></input>
        {hiden || (
          <DateRange
            onChange={(item) => setState([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            ranges={state}
            className="date"
          />
        )}
      </div>

      <div className={styles.headerInputContentItem}>
        <FontAwesomeIcon icon="fa-female" />
        <input placeholder="1 adult 0 children 1 room"></input>
      </div>
    </div>
  );
}

export default HeaderInputContent;
