import React, { Component } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text" id="name" name="name" value={this.state.name}  onChange={this.handleInputChange} />
            <p>{this.state.name}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"  id="email"  name="email"  value={this.state.email} onChange={this.handleInputChange}  />
           <p>{this.state.email}</p>
           </div>
         <div>
          <label htmlFor="phone">Phone:</label>
          <input  type="tel" id="phone"  name="phone" value={this.state.phone}onChange={this.handleInputChange}/>
          <p>{this.state.phone}</p>
          <input  type="submit" id="btn"   onChange={this.handleInputChange}/>

          </div>
      </form>
    );
  }
}
            
        
          
        
      
           
            
            
          
          
       

export default Form;

