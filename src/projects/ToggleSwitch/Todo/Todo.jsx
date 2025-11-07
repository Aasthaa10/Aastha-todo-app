import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import {TodoDate} from "./TodoDate"
import { MdContentPasteGo } from "react-icons/md";
import {
  setlocalstorage , getlocalstorage
} from "./todoLocalStorage";


export const Todo = () => {

  const [task, setTask] = useState(()=> getlocalstorage());
  


  const handleFormSubmit = (inputValue) => {  //const handleFormSubmit = (event)   event has been removed from here and input value is putted and put in ToForm comp.handleformsubmit
   //event.preventDefault();  is also shifted top TodoForm component
   
   const{id ,content, checked} = inputValue;
    // if (!inputValue) return;
    //To check if the input field is empty or not
    if(!content) return ;

    // if (task.includes(inputValue)) {
      //checking if the array already have that word or not
    //   setInputValue(""); //if duplicate then make it empty but will not add in the array    this is removed 

    const ifTodoContentMatched = task.find(
      (curTask)=>
      curTask.content == content);
      if(ifTodoContentMatched) return; 

    // setTask((prevTask) => [...prevTask, inputValue]); //whenever someone submits form with a value(mango)  it adds the value in the array

    setTask((prevTask)=>[...prevTask ,  
      {id,content ,checked}
    ])
    // setInputValue(""); // after writing any word when you click add task  ,it will make again empty so that another word can be written
    //Removed and moved to TodoForm
  };

  // IMP ** todo adding data to local storage so that after refreshing the date doesnot 
  //local storage has 2 operation: 1.getitem 2.setitem and it shpuld have key:string and value:string
  //if value is not string convert it to string using JSON.stringify().   
      setlocalstorage(task)
  // inside setlocalstorage = localStorage.setItem(todokey, JSON.stringify(task))  //  const todokey ="react-todo";

//Todo deleting 

const handleDeleteTodo=(value)=>{ //here value is our curelem
    // console.log(task);
    // console.log(value);
    const updatedtask =task.filter((curTask)=> curTask.content!== value) ; //jo hamare value(curel) isko delete krna h usse match ni hote
    //usko return kro
    setTask(updatedtask) //setTask currel ke alawa sare element ko return kryga,this way clicked (curelm)element dlt hojayag
}
//peviously was : curtask!==value ,here curtask is the whole object
//but now : curtask.content!==value, curtask.content give the string to be matched 
// ex : previously  we were checking: { id: 1, content: "Buy milk", checked: false } !== "Buy milk"
//but now :  content: "Buy milk" !== "Buy milk"

//clear all todo
const handleClearTodoData=()=>{
    setTask([]) //set task is empty array means all content is deleted
}

// todo handlecheckedtodo function 
const handleCheckedTodo =(content)=>{
  const updatedtask = task.map((curTask)=>{
    if(curTask.content ===content){
         return {...curTask,checked:!curTask.checked}; // { ...curTask } makes a copy of the old object
    }
    else{
      return curTask;//only the clicked todo changes; all others stay the same.
    }
  });
setTask(updatedtask);
}
  return (
    <section className="todo-container">

      <header>
        <h1>Todo List</h1>
       
       <TodoDate/>

      </header>

       <TodoForm onAddTodo={handleFormSubmit}/>  {/* handleformsubmit is transported to TodoForm components as child to parent lifting up method */}

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
                <TodoList 
                // key={index} 
                key= {curTask.id}
                // data={curTask} 
                data= {curTask.content}
                checked= {curTask.checked} //for handleCheckedTodo
                onHandleDeleteTodo={handleDeleteTodo}    //handleDeleteTodo is lifted up 
                onHandleCheckedTodo={handleCheckedTodo} />
                ); 
          })}

        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
            clear all
            </button>
      </section>
    </section>

  );
};
