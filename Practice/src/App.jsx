import React, { useState } from "react";

const App = () => {
  let [todoList, setTodoList] = useState([]);
  let Save = (event) => {
    event.preventDefault();

    let todoName = event.target.todo.value;
    if (!todoList.includes(todoName)) {
      let finalTodo = [...todoList, todoName];
      setTodoList(finalTodo);
     
    } else {
      alert("todo exist");
    };

    
  };

  let deleteTodo= (index)=>{
    console.log(index);
    let updated= [...todoList];
    updated.splice(index,1);
    setTodoList([...updated]);
  }

  let edit=(index)=>{
    console.log(index);
    
  }


  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" w-[400px] h-[100vh] rounded-2xl">
        <form onSubmit={Save}>
          <h1 className="text-[40px] text-center font-bold">Todo List</h1>
          <input
            type="text"
            name="todo"
            placeholder="Write Task"
            className="h-10 w-[280px] border-1 outline-none mt-4 ml-3 pl-2"
          />

          <button className="w-[80px] h-10 bg-amber-400 cursor-pointer rounded-r-md border-1">
            Save
          </button>
        </form>

        <div className="flex justify-first mt-2 flex-col">
          {todoList.map((todos, index) => {
            return (
              <>
                <ul>
                  <li className="bg-black text-white p-2 mt-2 rounded-md pl-2 flex justify-between" key={todos} onClick={()=>edit(index)}>
                    {todos.toUpperCase()}
                    <span>
                      <i class="ri-delete-bin-6-line pr-3 text-2xl cursor-pointer"
                      onClick={()=>deleteTodo(index)}
                      ></i>
                    </span>
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
