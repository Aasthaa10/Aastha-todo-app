 import {useEffect , useState} from "react" 
 

export const TodoDate=()=>{
    const[dateTime, setDateTime]=useState(" ");  //for setting time to continous clock of its own

      //Todo Date and Time  
  useEffect(()=>{

    const interval = setInterval(()=> {
     const now =new Date;
  const formattedData= now.toLocaleDateString();  //For today date use  now.toLocaleDateString()
  const formattedTime= now.toLocaleTimeString(); //For today Time use  now.toLocaleDateString()
  setDateTime(`${formattedData} - ${formattedTime}`
  )
 } , 1000);

 return () => clearInterval(interval);
  },  []); 
 
return  <h2 className="date-time">{dateTime}</h2>;
};