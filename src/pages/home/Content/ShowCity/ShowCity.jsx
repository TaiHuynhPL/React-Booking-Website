import styles from "./ShowCity.module.css";

//Component phần hiển thị hình ảnh city
const ShowCity = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((city, index) => (
        <div key={index} className={styles.containerItem}>
          <img src={city.image} alt={city.name} className={styles.item}></img>
          <h3>{city.name}</h3>
          <p>{city.subText}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCity;
