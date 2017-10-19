var ins = {
  name: "asd",
  age: 12
}
var reducers1 = (state = ins.name, action) => {
  switch (action.type) {
    case "SETNAME":
      return {name: action.name}
      break;
    case "SETAGE":
      return {age: action.age}
      break;
    default:

  }
}
var reducers2 = (state = ins.age, action) => {
  switch (action.type) {
    case "SETA":
      return {name: action.name}
      break;
    case "SETN":
      return {age: action.age}
      break;
    default:

  }
}

export {reducers1, reducers2}
