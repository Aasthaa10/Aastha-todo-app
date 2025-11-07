import "./EV.css"
export const Eventprops = () => {

    const HandleWelcomeUser =(user)=>{
        alert (`Hey!, ${user} `)
    }

    const handleHover =()=>{
        alert (`Hey,Thanks for hovering me! `)
    }
  return (
    <>
    <WelcomeUser onClick={  ()=>HandleWelcomeUser("Aastha") }
      onMouseEnter={handleHover}  />
    </>
  )
}


const WelcomeUser = (props)=>{
    const {onClick, onMouseEnter}= props  //using of props using destructuring
    const handleGreeting=()=> {
        console.log(`Hey User, Welcome`);
         props.onClick();
        } 
    return (
        <>
        <button onClick= {onClick}>click me</button>
        <button onMouseEnter= {onMouseEnter}>hover me</button>
        <button onClick = {handleGreeting}> greeeting </button>
        </>
    );
};