// Code EyesOnMe Component Here
import React, { Component } from 'react';
export default class EyesOnMe extends Component {
  render(){
    return (
      <button 
        onblur = () => {console.log('Hey! Eyes on me!') }
    )
  }
}
