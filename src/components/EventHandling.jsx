import "./EV.css"

export const EventHandling=()=>{
 //1st Method of event handling
    // function HandleButtonClickt(){
    //     alert("Hey I am onClick event");
    // }

    //2nd Method
    const HandleButtonClick = (event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        alert("Hey I am onClick event");
    };

    const HandleUserFunction =(users) =>{
        console.log(`Hey ${users}, Welcome`)
    }

    return (
        <>
        {/* Function component with named component */}
        {/* This  line will function without writing event handling means ( console.log(event), console.log(event.target) ) 
         as react gives it as a default.You just have to give refernce  and not call it here */}
        <button onClick={HandleButtonClick}> Click me</button>
        <br/>
        {/*1.  Function component using fat arrow function where we need to do ()=> HandleButtonClickt() */}
         {/*2.  In React,event handler receives an event object as an argument by default.
         However,when you use as arrow function directly in the onclick attribute without passing an event explicitly(means like 
         this:  ()=>HandleButtonClickt() ), React doesnot pass the event object to the your handler fucntion.This is
          because the arrow function creates a new function
         and calls your handler without passing any arguments. so we need to do ()=>HandleButtonClickt(event)  */}
          {/* console.log(event) this works but for this console.log(event.target) we need (event))=>HandleButtonClick(event)} */}
        <button onClick={ (event)=>HandleButtonClick(event)}> Click me 2 </button>
       
         <br/>
         {/* 3. Inline event handlers */}
        <button onClick={(event)=> console.log(event) }>Inline function</button>
    
        <br/>
        {/* 4. Function components with inline arrow functions */}
        <button onClick={(event)=> alert("Hey I am onClick event") }>Inline Arrow function</button>
        
        <br />
        {/* passing arguments to event handling */}
           <button onClick={(event)=> HandleUserFunction("Aastha") }> Click ME </button>
        </>
    );
};