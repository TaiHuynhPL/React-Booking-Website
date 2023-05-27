import styles from "./SearchListItem.module.css";

//Component cho 1 item search
function SearchListItem(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} alt={props.name} className={styles.img}></img>
      <div className={styles.detail}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.distance}>{props.distance} from center</p>
        <span className={styles.tag}>{props.tag}</span>
        <h5 className={styles.description}>{props.description}</h5>
        <p className={styles.type}>{props.type}</p>
        {props.freeCancel && (
          <div className={styles.freeCancel}>
            <h4>Free cancellation</h4>
            <p>You can cancel later, so lock in this great price today!</p>
          </div>
        )}
      </div>
      <div className={styles.about}>
        <div className={styles.rate}>
          <p>{props.rateText}</p>
          <span>{props.rate}</span>
        </div>
        <div className={styles.price}>
          <p className={styles.priceNumber}>${props.price}</p>
          <p className={styles.pricetaxes}>Includes taxes and frees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;
