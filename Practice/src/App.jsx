import React, { useState } from 'react'

const App = () => {
  let [todoList, setTodoList]= useState([]);
  let Save=(event)=>{
    
    event.preventDefault();

    let todoName= event.target.todo.value;

    if(!todoList.includes(todoName)){

      let finalTodo= [...todoList, todoName];
      setTodoList(finalTodo);
      console.log(todoList);
      

    }else{
      alert("todo exist");
    }
  }


  return (
    <div className='flex justify-center items-center h-[100vh]'>
      
      <div className=' w-[400px] h-[100vh] rounded-2xl'>

        <form onSubmit={Save}>
        <h1
        className='text-[40px] text-center font-bold'
        >Todo List</h1>
          <input type="text" name='todo'
          placeholder='Write Task' 
          className='h-10 w-[280px] border-1 outline-none mt-4 ml-3 pl-2'/>

          <button
          className='w-[80px] h-10 bg-amber-400 cursor-pointer rounded-r-md'
          >Save</button>
        </form>

        <div>
            
            {
              todoList.map((todos)=>{
                <ul>
                  <li>HTML <span></span></li>
                <li>{todos}</li>

                </ul>
              })
            }
          </div>
      </div>
    </div>
  )
}

export default App