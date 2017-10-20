import React from "react"
import {connect} from "react-redux"
import Child from "./child.jsx"
import {Route, Link} from 'react-router-dom'
import ChildA from "./childcomponents/a.jsx"
import ChildB from "./childcomponents/b.jsx"
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
        <ul>
          <li>
            <Link to="/footer/a">A</Link>
          </li>
          <li>
            <Link to="/footer/b">B</Link>
          </li>
        </ul>
        <Route path="/footer/a" component={ChildA}></Route>
        <Route path="/footer/b" component={ChildB}></Route>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.match.params);
  }
  componentWillReceiveProps() {
    console.log(this.props.match.params)
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
