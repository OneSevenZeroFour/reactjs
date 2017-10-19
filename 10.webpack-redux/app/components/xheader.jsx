import React from "react"
import store from "../../store.js"
import Xfooter from "./xfooter.jsx"
class Cp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 50
    }
    this.ok = (event) => {
      console.log(event.target.value);
      store.dispatch({type: "SETNAME", name: event.target.value})
    }
  }
  render() {
    return (
      <div style={{
        border: "1px solid green",
        padding: "20px"
      }}>这是第一个组件
        <input onChange={this.ok}/>
        <p>{this.state.num}</p>
        <Xfooter/>
      </div>
    )
  }
  componentDidMount() {
    var self = this
    store.subscribe(() => {
      self.setState({num: store.getState().age})
    })
  }
}

class Cp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hahaha"
    }
  }
  render() {
    return (
      <div style={{
        border: "1px solid green",
        padding: "20px"
      }}>这是第二个组件
        <p>{this.state.name}</p>
      </div>
    )
  }
  componentDidMount() {
    var self = this;
    store.subscribe(() => {
      console.log(store.getState())
      self.setState({name: store.getState().name})
    })
  }
}

class Cp3 extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div style={{
        border: "1px solid green",
        padding: "20px"
      }}>这是第三个组件</div>
    )
  }
}
export {Cp1, Cp2, Cp3};
