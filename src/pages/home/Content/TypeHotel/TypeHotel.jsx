import styles from "./TypeHotel.module.css";

//Coponent hiển thị các loại khách sạn
const TypeHotel = (props) => {
  return (
    <div>
      <h2 className={styles.title}>Browse by propety type</h2>
      <div className={styles.container}>
        {props.data.map((type, index) => (
          <div key={index} className={styles.containerItem}>
            <img src={type.image} alt={type.name}></img>
            <h4>{type.name}</h4>
            <p>{type.count} hotels</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeHotel;
