import React from "react";
import {connect} from "react-redux"
import "./child.css"

// less
let style = {
  div: {
    color: "red",
    fontSize: "14px"
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="child" style={style.div} className="divdiv">
        <p>孩子组件</p>
        <input onChange={this.props.sendSkill}/>
      </div>
    )
  }
}

export default connect((state) => {
  // 过滤器
  // getters store(state)->props
  return state
}, (dispatch) => {
  return {
    sendSkill(event) {
      dispatch({type: "SETSKILL", skill: event.target.value})
    }
  }
})(Child);
