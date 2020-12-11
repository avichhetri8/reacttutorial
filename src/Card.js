import React from 'react'
import logo from './logo.svg';
import './App.css';

export const Card = (props) => {
    console.log("",props)
    return (
        <div className="card">
            {console.log("p",props)}
            
      <img  src={props.avatar} alt="Avatar" style={{width:"100%" }} />
      <div className="container">
        <h4><b>{props.name}</b></h4> 
        <div><input type="text" onChange={props.onChange}/></div>
        <p>{props.title}</p> 
        <div>{props.children}</div>
        
        <div><button className="button-red button" onClick={props.onDelete}>Delete</button></div>
      </div>
    </div>
    )
}

