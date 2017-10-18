import React from "react";
import ReactDOM from "react-dom";
import {Cp1,Cp2,Cp3} from "./app/components/xheader.jsx"
import Lifecycle from "./app/components/lifecycle.jsx"
ReactDOM.render(<div>
    <p>测试</p>
    <p>123</p>
    <Cp1 />
    <Cp2 />
    <Cp3 />
    <Lifecycle skill="ps" />
  </div>,document.getElementById("demo"))
