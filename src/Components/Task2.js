import React from "react";
import RCB from '../Images/rcb-img.png';
import CSK from '../Images/csk-img.png';

function Task2(){
    return(
        <>
        <div className="Container">
    <div className="Card">
        <h1>SUPER OVER LEAGUE</h1>
      <img src={RCB} className="rcb" alt="RCB"/>
      <img src={CSK} className="csk" alt="CSK"/>
    </div>
  </div>

            </>
    )
}
export default Task2;