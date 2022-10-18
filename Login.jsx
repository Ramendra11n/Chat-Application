import React from "react";
 export default function  Login(){
    return (<div>

    <div className ="form-Container">
  <div className ="form-Wrapper">
<span className="logo">Achat</span>
<span className="title">Login </span>
    <form >

     
        <input type="text"className="email"placeholder="Email or Username"></input>
        <input type="text"className="password"placeholder="Password"></input>
       
     <button>
       Login 
     </button>

    </form >
    <p>Have an account</p>
  </div>
    </div>
    </div>);
 }