
import{useState} from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io"; //imported from react icon app
import { PiUserSwitchBold } from "react-icons/pi";  //imported from react icon app

export const ToggleSwitch = () =>{
  const[isOn, setIsOn] = useState(false);

  const handleToggle = () =>{
    setIsOn(!isOn);
  }

    return (
      <>
    <h1 style={{color:"#000", textAlign:"center"}}> Toggle Switch <IoIosSwitch  style={{color:"red", textAlign:"center"}}/>
   < PiUserSwitchBold />
 </h1>
    {/* //<IoIosSwitch />   this icon is taken from react icon app and we add  style={{color:"red", textAlign:"center"}} 
    // to make icon red*/}
    <div className="toggle-switch" 
    style={{backgroundColor: isOn? "#4caf50 " : " #f44336"}}
    onClick={handleToggle}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
    </>
  );
};

