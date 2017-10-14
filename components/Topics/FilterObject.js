import React, {Component} from "react";

class FilterObject extends Component{
  constructor(props){
    super(props);
    //state object goes here
    this.state={
      unFilteredArray:[
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput:"",
      filteredArray:[]
    }
  }
  //methods go here
  handleChange(value){
    this.setState({userInput:value});
  }

  filterNames(prop){
    var unfiltered= this.state.unFilteredArray;
    var filtered=[];
    for(var i=0; i<unfiltered.length; i++){
      if(unfiltered[i].hasOwnProperty(prop)){
        filtered.push(unfiltered[i]);
      }
    }
    this.setState({filteredArray: filtered});
  }

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
        <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={()=>this.filterNames(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectPB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
      </div>
    )
  }
}

export default FilterObject;
