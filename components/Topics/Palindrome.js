import React, {Component} from "react";

class Palindrome extends Component{
  constructor(props){
    super(props)
    //state object goes here
    this.state={
      userInput:"",
      palindrome:""
    }
  }

  //methods go here
  handleChange(value){
    this.setState({userInput:value})
  }

  solve(userInput){
    var forwards= userInput;
    var backwards= userInput;
    backwards= backwards.split("").reverse().join("");

    if (forwards===backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  //return/render
  render(){
    return(
      <div className="puzzleBox">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e)=>this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={()=>this.solve(this.state.userInput)}>Button</button>
        <span className="resultsBox">Results: {this.state.palindrome}</span>
      </div>
    )
  }
}
export default Palindrome;
