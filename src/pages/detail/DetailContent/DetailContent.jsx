import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DetailContent.module.css";

//Component nội dung chính cho phần trang detail
const DetailContent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.aboutDetail}>
          <h2 className={styles.name}>{props.data.name}</h2>
          <p className={styles.address}>
            <FontAwesomeIcon icon="fa-location-dot" className={styles.icon} />
            {props.data.address}
          </p>
          <p className={styles.distance}>{props.data.distance}</p>
          <p className={styles.price}>{props.data.price}</p>
        </div>
        <div>
          <button className={styles.btn}>Reserve or Book Now!</button>
        </div>
      </div>
      <div className={styles.imgs}>
        {props.data.photos.map((photo, index) => (
          <img key={index} src={photo} alt={photo} className={styles.img}></img>
        ))}
      </div>
      <div className={styles.detail}>
        <div className={styles.detailDescription}>
          <h4 className={styles.title}>{props.data.title}</h4>
          <p className={styles.description}>{props.data.description}</p>
        </div>
        <div className={styles.detailPrice}>
          <h4>Perfect for a 9-night stay!</h4>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <div>
            <span>${props.data.nine_night_price}</span> (9 nights)
          </div>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
