import {createStore} from "redux";
let store = createStore((state = {
  name: "laoyao"
}, action) => {
  switch (action.type) {
    case "SETNAME":
      return {name: action.name}
      break;
    case "SETAGE":
      return {age: action.age}
      break;
    default:
  }
})

export default store
