import React, { useRef } from "react";
import styles from "./input_box.module.css";

const InputBox = ({ submit }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    submit(parseInt(inputRef.current.value));
  };
  return (
    <section className={styles.input_box}>
      <h1 className={styles.title}>약수 계산기</h1>
      <form>
        <input ref={inputRef} className={styles.input} type="text" />
        <div className={styles.buttons}>
          <button onClick={onClick}>계산하기</button>
        </div>
      </form>
    </section>
  );
};

export default InputBox;
