// Code Keypad Component Here
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
        onblur = {handleBlur}
        onfocus = {handleFocus}
        ></input>
    )
  }
}
