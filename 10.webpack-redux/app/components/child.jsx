import React from "react";
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
    this.state = {
      bool: true
      //url:require("xxx.jpg")
    }
    this.toggle = () => {
      this.setState({
        bool: !this.state.bool
      })
    }
    this.content = (self) => {
      if (self.state.bool) {
        return <p>123<span>456</span>
        </p>
      } else {
        return <p>654<span>321</span>
        </p>
      }
    }
  }
  render() {
    return (
      <div style={style.div} className="divdiv">
        {this.content(this)}
        <button onClick={this.toggle}>ok</button>
      </div>
    )
  }
}

export default Child;
