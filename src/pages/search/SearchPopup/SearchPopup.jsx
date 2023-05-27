import styles from "./SearchPopup.module.css";

//Component SearchPopup cho các ô input
const SearchPopup = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search</h2>
      <div className={styles.item}>
        <h4>Destination</h4>
        <input type="text" />
      </div>

      <div className={styles.item}>
        <h4>Check-in Date</h4>
        <input type="text" placeholder="06/24/2022 to 06/24/2022" />
      </div>

      <div className={styles.options}>
        <h4>Options</h4>
        <div>
          <div className={styles.optionsItem}>
            <p>Min price per night</p>
            <input type="number" min="0"></input>
          </div>
          <div className={styles.optionsItem}>
            <p>Max price per night</p>
            <input type="number" min="0"></input>
          </div>
          <div className={styles.optionsItem}>
            <p>Adult</p>
            <input type="number" defaultValue="1" min="0"></input>
          </div>
          <div className={styles.optionsItem}>
            <p>Children</p>
            <input type="number" defaultValue="0" min="0"></input>
          </div>
          <div className={styles.optionsItem}>
            <p>Room</p>
            <input type="number" defaultValue="1" min="1"></input>
          </div>
        </div>
      </div>

      <button className={styles.button}>Search</button>
    </div>
  );
};

export default SearchPopup;
