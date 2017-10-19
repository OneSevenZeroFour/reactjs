import React from "react";
import Child from "./child.jsx"
class Lifecycle extends React.Component {
  constructor(props){
    super(props);
    // S
    this.state = {
      name:"laoyao"
    }
    this.test = ()=>{
      console.log(this.state.name)
    }
  }

  componentDidMount(){
    console.log(this.refs.pp)
    console.log(this.props)
  }

  // V
  render(){
    return (<div>
        <p ref="pp">{this.state.name}</p>
        <button onClick={this.test}>ok</button>
        <Child />
      </div>)
  }
}
export default Lifecycle;
