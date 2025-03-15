import React, { useState } from 'react'

const Inventory = () => {
  let[station1, setStation1]= useState();
  let[station2, setStation2]= useState();

  let Track=(e)=>{
    e.preventDefault();
    console.log(station1);
    console.log(station2);
    
  }
  let select1=(e)=>{
    setStation1(e.target.value);
  }
  let select2=(e)=>{
    setStation2(e.target.value);  
  }

  
  return (
    <>
    <div className='flex'>
    <form  onSubmit={Track}>
      <div>
        
      <select name="select" id="" onChange={select1} key="select-key">
      <option value="Select-Station">Select Station</option>
        <option value="Sahibabad">Sahibabad</option>
        <option value="Ghazibad">Ghazibad</option>
        <option value="Guldhar">Guldhar</option>
        <option value="Duhai">Duhai</option>
      </select>
      </div>
          <div>
            <h1>To</h1>
          </div>
      <div>
      <select name="select" id="" onChange={select2} key="select-key">
      <option value="Select-Station">Select Station</option>
        <option value="Sahibabad">Sahibabad</option>
        <option value="Ghazibad">Ghazibad</option>
        <option value="Guldhar">Guldhar</option>
        <option value="Duhai">Duhai</option>
      </select>
      </div>
      <button>Search</button>
      </form>
    </div>
    </>
  )
}

export default Inventory