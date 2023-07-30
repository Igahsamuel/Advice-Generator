import { useState, useEffect } from "react";
import Dice from "./assets/icon-dice.svg";
import PatternDivider from "./assets/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState("");

  const handleDice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice({ id: data.slip.id, text: data.slip.advice });
  };
  useEffect(() => {
    const adviceFunction = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({ id: data.slip.id, text: data.slip.advice });
    };
    adviceFunction();
  }, []);
  return (
    <div className="bg-Dark-Blue h-[100vh] flex items-center">
      {/* <div className="mx-auto"> */}
      <div
        className="flex flex-col rounded-lg container m-auto bg-Dark-Grayish-Blue items-center relative h-[281px]
       w-[300px] md:w-[500px] whitespace-normal px-8 text-center"
      >
        <h4 className="text-Neon-Green my-5">Advice #{advice.id}</h4>
        <p className="text-Light-Cyan font-bold my-5">"{advice.text}"</p>
        <img src={PatternDivider} alt="" className="my-5" />
        <button className="chim">
          <img src={Dice} alt="" onClick={handleDice} />
        </button>
      </div>
    </div>
    // </div>
  );
}

export default App;
