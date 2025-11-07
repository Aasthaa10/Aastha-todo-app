import { use, useState } from "react";

export const State=()=>{

//usestate syntax
const[count,setCount]=useState(0);
console.log("Parent component  rendered")

 const handleButtonClick=()=>{
 setCount(()=> count+1)
 }

    return (
        <>
        <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </div>
        <ChildComponent count={count}/>
        <siblingcomponent/>
        </>
    );
};

function ChildComponent({count}) {
    console.log("Child component rendered");
    return (
      <div className="main-div">
        <h1>Child Component - {count}</h1>
        </div>
    );
}

export function SiblingComponent() {
    console.log("siblingcomponent rendered");
    return (
      <div className="main-div">
        <h1>sibling Component - {count}</h1>
        </div>
    );
}