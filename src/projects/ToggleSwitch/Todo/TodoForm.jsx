import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {  //HandleFormSubmit is tranferref using onaddtodo
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    // setInputValue(value); //any word is typed the value will get updated with the word typed
    setInputValue({id: value, content:value , checked:false})  //for checking and unchecking value
  };


  const handleFormSubmit=(event)=>{
    event.preventDefault();
     onAddTodo(inputValue);
      setInputValue({id:" " , content:" " , checked:false}); //if duplicate then make it empty but will not add in the array  ,moved here
    }
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
