import React from "react"
import store from "../../store.js"
class Xfooter extends React.Component {
  constructor(props) {
    super(props);
    this.ok = (event) => {
      console.log(event.target.value)
      store.dispatch({type: "SETAGE", age: event.target.value})
    }
  }
  render() {
    return (
      <div style={{
        border: "1px solid red",
        padding: "20px"
      }}>xfooter
        <input type="range" onChange={this.ok}/>
      </div>
    )
  }
  componentDidMount() {}
}

export default Xfooter
