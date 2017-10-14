import React, {Component} from "react";

class EvenAndOdd extends Component{
  constructor(props){
    super(props);

    this.state={
      evenArray:[],
      oddArray:[],
      userInput:""
    }
  }

  handleChange(value){
    this.setState({userInput:value});
  }

  solve(userInput){
    let evens=[];
    let odds=[];
    var userArr= userInput.split(",");
    for(let i=0;i<userArr.length;i++){
      userArr[i]= parseInt(userArr[i]);
      if(userArr[i]%2===0){
        evens.push(userArr[i]);
      }else if(userArr[i]%2!==0 && !isNaN(userArr[i])){
        odds.push(userArr[i]);
      }
    }
    this.setState({evenArray:evens});
    this.setState({oddArray:odds});
  }

  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e)=>{this.handleChange(e.target.value)}}></input>
        <button className="confirmationButton" onClick={()=>this.solve(this.state.userInput)}>Split</button>
        <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;
