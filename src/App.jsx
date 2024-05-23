import { useState } from "react";
import "./App.css";
import ButtonContainer from "./Componant/ButtonContainer";
import Display from "./Componant/Display";
function App() {
  const [calvalue, setcalvalue] = useState("");
  const [backColor, setbackColor] = useState();
  const handleChange = () => {};
  const onButtonClick = (item) => {
    if (item === "=") {
      setcalvalue(eval(calvalue));
    } else if (item === "c") {
      setcalvalue("");
    } else {
      setcalvalue(calvalue + item);
    }
  };
  const handlMode = () => {
    setbackColor(!backColor);
  };
  return (
    <>
      <div className={backColor ? "calculater display-mode" : "calculater"}>
        <button className="display-btn" onClick={handlMode}>
          {backColor ? (
            <span className="light">
              <i class="fa-solid fa-sun"></i>
            </span>
          ) : (
            <span className="dark">
              <i class="fa-solid fa-moon"></i>
            </span>
          )}
        </button>
        <div className="main-calcu">
          <Display handleChange={handleChange} calvalue={calvalue}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
