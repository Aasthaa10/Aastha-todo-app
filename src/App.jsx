// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css"
// import { EventHandling } from "./components/EventHandling";
// import { Eventprops } from "./components/EventProps";
// import {EventPropagation} from "./components/EventPropagation";
import "./components/EV.css"
// import { State } from "./components/hooks/state";
// import {DerivedState} from "./components/hooks/DerivedState"
// import {LiftingState} from "./components/LiftStateUp"
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch/ToggleSwtich";
import {Todo} from "./projects/ToggleSwitch/Todo/Todo";

export const App = () => {
  return (
    
    <section className="container">
      {/* <h1 className="card-heading">
        List of Best Netflix Series</h1> */}
    {/* <NetflixSeries/> */}

    {/* <EventHandling/> */}
     {/* <Eventprops/> */}
     {/* <EventPropagation /> */}
     
     {/* <State /> */}
     {/* <Sibling/> */}
     {/* <DerivedState/> */}
     {/* <LiftingState/> */}

     {/* <ToggleSwitch/> */}
     <Todo />

    </section>
  
  );
};
// export function Sibling() {
//     console.log("sibling component rendered");
//     return (
//       <div className="main-div">
//         <h1>sibling Component</h1>
//         </div>
//     );
// }

