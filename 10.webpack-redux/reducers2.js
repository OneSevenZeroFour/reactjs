var reducers2 = (state = {}, action) => {
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

export default reducers2
