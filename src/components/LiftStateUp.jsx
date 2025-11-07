import { useState } from "react";

export const LiftingState = () => {
    // For updating state of children from Parent,you can use the concept of lift the state up
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    {/* inputValue and setInputValue is passed as a props to the childrens */}
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => { 
     {/* inputValue and setInputValue is passed as a props to the childrens */}
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
     {/* inputValue and setInputValue is passed as a props to the childrens */}
  return <p>The current input value is: {inputValue}</p>;
};
