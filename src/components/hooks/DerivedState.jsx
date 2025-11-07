import { useState } from "react"

export const DerivedState=()=>{
    const[users, setUsers]=useState(
        [
            {name:"Alice ",age : 25},
            {name: "Bob ", age : 30},
            {name:"Charlie" , age :35},
            {name:"Angles" , age :45}
        ]
    );

    console.log("users");
   const userCount= users.length; //Derived state which is calculated by another  state or props
   //here userCount = average age of users 

   const averageAge = (users.reduce((accum, curElm) => accum + curElm.age, 0 )) / userCount;  
   // sum  of age using reduce = (users.reduce((accum, curElm) => accum + curElm.age, 0 ))
    return (
        <div className="main-div">
        <h1>Users List</h1>
        <ul>
            {users.map((user, index)=>(
             <li key={index}>
                {user.name} - {user.age } year old
             </li>
            ))}
        </ul>
        <p>Total Count = {userCount} </p>
        <p>Average Age  = {averageAge} </p>
        </div>
    )
}

