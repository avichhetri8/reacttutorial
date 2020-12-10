import React from 'react'
import logo from './logo.svg';
import './App.css';

export const Card = (props) => {
    console.log("",props)
    return (
        <div className="card">
            {console.log("p",props)}
            
      <img  src={logo} alt="Avatar" style={{width:"100%" }} />
      <div className="container">
        <h4><b>{props.name}</b></h4> 
        <p>{props.title}</p> 
        <div>{props.children}</div>
        <div><button className="button2 button" onClick={props.changeName}>Change Name</button></div>
      </div>
    </div>
    )
}

