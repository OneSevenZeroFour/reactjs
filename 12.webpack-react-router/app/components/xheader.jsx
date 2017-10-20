import React from "react"
import {connect} from "react-redux"
class Xheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.ok = (event) => {
      this.props.dispatch({type: "SETNAME", name: event.target.value})
    }
  }
  render() {
    return (
      <div style={{
        border: "1px solid green",
        padding: "20px"
      }}>这是第一个组件
        <p>{this.props.age}</p>
        <p>{this.props.skill}</p>
        <input onChange={this.ok}/>
      </div>
    )
  }
  componentDidMount() {
    console.log(this)
  }
}
export default connect((state) => {
  console.log(state)
  state.age = (state.age + "年龄")
  return state
})(Xheader);
