import React from "react";
 export default function  Register(){
    return (<div>

    <div className ="form-Container">
  <div className ="form-Wrapper">
<span className="logo">Achat</span>
<span className="title">Register </span>
    <form >

        <input type="text" className="name" placeholder="Name "></input>
        <input type="text"className="email"placeholder="Email"></input>
        <input type="text"className="password"placeholder="Password"></input>
        <input type="text"className="file"placeholder="File"></input>
     <button>
        Sign UP 
     </button>

    </form >
    <p>You don't have an account

    </p>
  </div>
    </div>
    </div>);
 }