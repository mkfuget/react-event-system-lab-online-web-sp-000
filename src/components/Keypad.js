// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  handleKeyUp = () =>
  {
    console.log('Entering password...')
  }
  handleFocus = () =>
  {
    console.log('Good!')
  }
  render(){
    return (
      <input type = "password"
        onkeyUp = {handleKeyUp}
        ></input>
    )
  }
}
