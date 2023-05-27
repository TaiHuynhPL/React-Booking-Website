import Navbar from "../home/Navbar/Navbar";
import Footer from "../home/Footer/Footer";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import styles from "./Search.module.css";

//Component trang Search
const Search = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.contentContainer}>
        <SearchPopup></SearchPopup>
        <SearchList></SearchList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Search;
