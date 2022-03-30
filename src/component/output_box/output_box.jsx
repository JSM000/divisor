import React from "react";
import Divisor from "../divisor/divisor";
import styles from "./output_box.module.css";

const OutputBox = ({ divisorsL, divisorsR, divisorNum }) => {
  return (
    <section className={styles.output_box}>
      <div className={styles.divisorNum}>약수의 개수 : {divisorNum}</div>
      <div className={styles.divisorBox}>
        <div className={styles.left}>
          {divisorsL.map((divisor) => {
            return <Divisor divisor={divisor} />;
          })}
        </div>
        <div className={styles.right}>
          {divisorsR.map((divisor) => {
            return <Divisor divisor={divisor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OutputBox;
