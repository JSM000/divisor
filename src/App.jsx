import { useState } from "react";
import styles from "./App.module.css";
import InputBox from "./component/input_box/input_box";
import OutputBox from "./component/output_box/output_box";

function App() {
  const [divisorNum, setDivisorNum] = useState();
  const [divisorsL, setDivisorsL] = useState([]);
  const [divisorsR, setDivisorsR] = useState([]);

  const calculate = (value) => {
    if (isNaN(value)) {
      prompt("숫자만 입력하세요.");
      return;
    }
    const NewdivisorsL = [];
    const NewdivisorsR = [];
    for (let i = 1; i < value + 1; i++) {
      const quo = value / i;
      if (quo < i) {
        break;
      }
      if (value % i === 0) {
        if (quo == i) {
          NewdivisorsL.push(i);
        } else {
          NewdivisorsL.push(i);
          NewdivisorsR.push(quo);
        }
      }
    }
    NewdivisorsL.sort(function (a, b) {
      return a - b;
    });
    NewdivisorsR.sort(function (a, b) {
      return b - a;
    });
    const NewdivisorNum = NewdivisorsL.length + NewdivisorsR.length;
    setDivisorNum(NewdivisorNum);
    setDivisorsL(NewdivisorsL);
    setDivisorsR(NewdivisorsR);
  };

  return (
    <div className={styles.app}>
      <InputBox submit={calculate} />
      <OutputBox
        divisorNum={divisorNum}
        divisorsL={divisorsL}
        divisorsR={divisorsR}
      />
    </div>
  );
}

export default App;
