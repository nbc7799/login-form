import { useRef } from "react";
import styles from "./app.module.css";

function App() {
  const idRef = useRef();
  const passwordRef = useRef();

  const onLogin = () => {};

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
