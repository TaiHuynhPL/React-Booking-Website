import styles from "./SearchList.module.css";
import SearchListItem from "./SearchListItem/SearchListItem";
//lấy data từ file json
import searchList from "../../../data/search.json";

//Component SearchList hiên thị danh sách các item search
const SearchList = () => {
  return (
    <div className={styles.container}>
      {searchList.map((item, index) => (
        <div key={index}>
          <SearchListItem
            img={item.image_url}
            name={item.name}
            distance={item.distance}
            tag={item.tag}
            description={item.description}
            type={item.type}
            freeCancel={item.free_cancel}
            rateText={item.rate_text}
            rate={item.rate}
            price={item.price}
          ></SearchListItem>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
