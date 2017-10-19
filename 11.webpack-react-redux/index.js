import React from "react";
import ReactDOM from "react-dom";
import Xheader from "./app/components/xheader.jsx";
import Xfooter from "./app/components/xfooter.jsx";
import store from "./store.js"
import {Provider} from "react-redux"
ReactDOM.render(
  <Provider store={store}>
  <div>
    <Xheader/>
    <Xfooter/>
  </div>
</Provider>, document.getElementById("demo"))
