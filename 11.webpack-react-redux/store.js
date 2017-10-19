import {createStore} from "redux";
let store = createStore((state = {
  name: "asd",
  age: 0
}, action) => {
  switch (action.type) {
    case "SETNAME":
      return {name: action.name}
      break;
    case "SETAGE":
      return {age: action.age}
      break;
    case "SETSKILL":
      console.log(action);
      return {skill: action.skill, age: 1}
      break;
    default:
      return state
  }
})

export default store
