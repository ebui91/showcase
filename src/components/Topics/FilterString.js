import React, {Component} from "react";

class FilterString extends Component{
  constructor(props){
    super(props);
    //state object goes here
    this.state={
      names: ["Eric Bui", "Erik Golden", "Eric Patterson", "Eric Drewes"],
      userInput: "",
      filteredNames: []
    }
  }
    //methods go here
    handleChange(value){
      this.setState({userInput: value});
    }

    solve(userInput){
      var filtered=[];
      for(let i=0;i<this.state.names.length;i++){
        if(this.state.names[i].indexOf(this.state.userInput)!==-1){
          filtered.push(this.state.names[i]);
        }
      }
      this.setState({filteredNames: filtered});
    }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter Eric/Erik's</h4>
        <span className="puzzleBox">Names: {JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={(e)=>{this.handleChange(e.target.value)}}></input>
        <button className="confirmationButton" onClick={()=>this.solve(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringPB">Filtered Names: {JSON.stringify(this.state.filteredNames)}</span>
      </div>
    )
  }

}

export default FilterString;
