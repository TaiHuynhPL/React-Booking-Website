import styles from "./Hotel.module.css";

//Component hiển thị phần hình ảnh của hotel
const Hotel = (props) => {
  //hàm khi click vào tên chi tiết các hotel để chuyển sang trang detail
  const handleDetail = () => {
    window.location.replace("http://localhost:3000/detail");
  };

  return (
    <div>
      <h2 className={styles.title}>Homes guests love</h2>
      <div className={styles.container}>
        {props.data.map((hotel, index) => (
          <div key={index} className={styles.containerItem}>
            <img
              src={hotel.image_url}
              alt={hotel.name}
              className={styles.img}
            ></img>
            <p className={styles.name} onClick={handleDetail}>
              {hotel.name}
            </p>
            <p>{hotel.city}</p>
            <p className={styles.price}>Starting from ${hotel.price}</p>
            <div>
              <span className={styles.rate}>{hotel.rate}</span>
              {hotel.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
