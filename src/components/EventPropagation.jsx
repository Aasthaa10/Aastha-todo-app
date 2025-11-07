import "./EV.css"

export const EventPropagation=()=>{
const handleGrandParentclick=()=>{
console.log("GrandParent clicked")
}

const handleparentclick=()=>{
  console.log("Parent clicked")
}

const handlechildclick=(event)=>{
    console.log(event)
    event.stopPropagation(); //it stops eventbubbling
    // onClick as per  eventbubbling first child then its parent then grandparent is shown from (child to parent)
console.log("child clicked")
}

return (
    <section className="main-div">
        {/* onClickCapture is if child is clicked then first grandparent then parent then child will occur from (parent to child) */}
     <div className="g-div" onClickCapture={handleGrandParentclick}>
        <div className="p-div" onClickCapture={handleparentclick}>
            <button className="c-div" onClickCapture={handlechildclick}>
                 child div
            </button>
        </div>
     </div>

    </section>
)
}