import React, {Component} from "react";

class Product extends Component{
  constructor(props){
    super(props);
    //state object goes here
    this.state={
      number1: 0,
      number2: 0,
      product: null
    }
  }

  //methods
  updateNumber1(value){
    this.setState({number1: parseInt(value,10)});
  }

  updateNumber2(value){
    this.setState({number2: parseInt(value,10)});
  }

  multiply(num1,num2){
    this.setState({product: num1*num2});
  }

  //render/return
  render(){
    return(
      <div className="puzzleBox sumPB">
        <h4>Product</h4>
        <input className="inputLine" onChange={(e)=> this.updateNumber1(e.target.value)}></input>
        <input className="inputLine" onChange={(e)=> this.updateNumber2(e.target.value)}></input>
        <button className="confirmationButton" onClick={()=>this.multiply(this.state.number1,this.state.number2)}>Multiply</button>
        <span className="resultsBox">Product: {this.state.product}</span>
      </div>
    )
  }
}

export default Product;
