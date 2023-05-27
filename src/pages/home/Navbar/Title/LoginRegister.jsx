import styles from "./LoginRegister.module.css";

//Component đăng nhập chứa 2 thành phần là đăng ký và đăng nhập
const LoginRegister = () => {
  return (
    <div className={styles.loginregister}>
      <div className={styles.register}>Register</div>
      <div className={styles.login}>Login</div>
    </div>
  );
};

export default LoginRegister;
