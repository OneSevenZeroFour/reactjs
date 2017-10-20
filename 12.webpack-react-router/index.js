// react redux react-router webpack sass es6 jsx axios
import React from "react";
import ReactDOM from "react-dom";
import Xheader from "./app/components/xheader.jsx";
import Xfooter from "./app/components/xfooter.jsx";
import Bt from "./app/components/bt.jsx";
import store from "./store.js"
import {Provider} from "react-redux"
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
ReactDOM.render(
  <Router>
  <Provider store={store}>
    <div>
      <ul>
        <li>
          <Link to="/">xheader</Link>
        </li>
        <li>
          <Link to="/footer/11231231">xfooter</Link>
        </li>
        <li>
          <a href="#/footer/dajkdhak">xfooter</a>
        </li>
        <li>
          <a href="#/bt">bt</a>
        </li>
      </ul>
      <Route exact path="/" component={Xheader}></Route>
      <Route exact path="/bt" component={Bt}></Route>
      <Route path="/footer/:id" component={Xfooter}></Route>
      {/*<Redirect push to="/footer"/>*/}
    </div>
  </Provider>
</Router>, document.getElementById("demo"))
