import { useRef } from "react";
import styles from "./app.module.css";

function App() {
  const idRef = useRef();
  const passwordRef = useRef();
  const savedUserName = localStorage.getItem("USERNAME_KEY");
  const savedPassWord = localStorage.getItem("PASSWORD_KEY");

  const onLogin = (e) => {
    e.preventDefault();
    const username = idRef.current.value;
    const password = passwordRef.current.value;
    localStorage.setItem("USERNAME_KEY", username);
    localStorage.setItem("PASSWORD_KEY", password);
    doneLogin(username, password);
  };

  const doneLogin = (username, password) => {
    if (savedUserName === "" || savedPassWord === "") {
      alert("아이디와 비밀번호를 확인해주세요");
    } else if (username === "박준규" && password === "123") {
      alert("로그인 성공!");
    }
  };
  return (
    <section className={styles.loginBox}>
      <div className={styles.logo}>LOGO DESIGN</div>
      <div className={styles.inputBox}>
        <input ref={idRef} type="text" placeholder="UserName" />
        <input ref={passwordRef} type="text" placeholder="PassWord" />
      </div>
      <button type="button" className={styles.button} onClick={onLogin}>
        Button
      </button>
    </section>
  );
}

export default App;
