import LoginRegister from "./LoginRegister";
import styles from "./Title.module.css";

//Component title ở trên của navbar có chưa chữ 'booking website' và phần đăng nhập
function Title() {
  //hàm khi click vào chữ 'Booking Website' để chuyển về trang Homepage.
  const handleBackHomepage = () => {
    window.location.replace("http://localhost:3000");
  };

  return (
    <div className={styles.header}>
      <p onClick={handleBackHomepage}>Booking Website</p>
      <LoginRegister></LoginRegister>
    </div>
  );
}
export default Title;
