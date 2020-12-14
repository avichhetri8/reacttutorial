import React from 'react'
import logo from './logo.svg';
import './App.css';

export class Card extends React.Component{
    constructor(){
      super()
    }
    render(){
    return (
        <div className="card">
            {console.log("class",this.props)}
            
      <img  src={this.props.avatar} alt="Avatar" style={{width:"100%" }} />
      <div className="container">
        <h4><b>{this.props.name}</b></h4> 
        <div><input type="text" onChange={this.props.onChange}/></div>
        <p>{this.props.title}</p> 
        <div>{this.props.children}</div>
        
        <div><button className="button-red button" onClick={this.props.onDelete}>Delete</button></div>
      </div>
    </div>
    )
}
}

