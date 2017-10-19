import React from "react"
import {connect} from "react-redux"
import Child from "./child.jsx"
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{
        border: "1px solid red",
        padding: "20px"
      }}>xfooter
        <p>{this.props.name}</p>
        <input type="range" onChange={this.props.ok}/>
        <Child/>
      </div>
    )
  }
  componentDidMount() {
    console.log(this);
  }
  componentWillReceiveProps() {
    console.log(this)
    /*store.subscribe
    this.setState*/
  }
}

export default connect((state) => {
  console.log(state)
  return state
}, (dispatch) => {
  return {
    ok(event) {
      console.log(event.target.value);
      dispatch({type: "SETAGE", age: event.target.value})
    }
  }
})(Xfooter)
