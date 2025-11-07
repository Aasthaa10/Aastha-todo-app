const todokey ="react-todo";

export const getlocalstorage=()=>{
    
    const rawtodos = localStorage.getItem(todokey)
    if(!rawtodos) return [];// for the first time there is no data so it will return empty array
    else{
      return JSON.parse(rawtodos);
    }
}

export const setlocalstorage=(task)=>{
   return localStorage.setItem(todokey, JSON.stringify(task))  //  const todokey ="react-todo";
}