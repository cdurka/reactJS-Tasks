import React from "react";

function Personal() {
 
  let form = () => {
    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let department = document.getElementById('department').value;
    let college = document.getElementById('college').value;
    alert("Thank you "+username +"have been registered");


  };

  return (
    <>
      <div>
        <h1>Form</h1>
        <label>Enter your username:</label>
        <input type="text" id="username" name="username" /><br></br>
        
        <label>Enter your age:</label>
        <input type="number" id="age" name="age" /><br></br>
        
        <label>Enter your department:</label>
        <input type="text" id="department" name="department" /><br></br>
        
        <label>Enter your college:</label>
        <input type="text" id="college" name="college" /><br></br>
        
        <button onClick={form}>Submit</button>
      </div>
    </>
  );
}

export default Personal;