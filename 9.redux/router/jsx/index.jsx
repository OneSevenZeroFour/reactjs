var Router = ReactRouter.Router;
var store = Redux.createStore((state, action) => {
  // store
  if (typeof state === 'undefined') {
    return {name: "abc", skill: "ps"}
  }
  // action
  switch (action.type) {
    case "SETNAME":
      return {name: "cba", skill: "css"}
      break;
    default:
  }
})
var Xheader = React.createClass({
  getInitialState() {
    return {name: "laoyao", answer: "", selectValue: "2"}
  },
  setName() {
    store.dispatch({type: "SETNAME"})
  },
  render() {
    return (
      <div ref="name" style={{
        border: "1px solid green",
        padding: "20px"
      }}>
        <div>第一个组件</div>
        <button onClick={this.setName}>Ok</button>
      </div>
    )
  },
  //挂载之后 mounted
  componentDidMount() {
    // this.$store.getter
    // this.$store.dispatch
    console.log(store.getState());
  }
})
var Xfooter = React.createClass({
  getInitialState() {
    return {name: "第二个组件"}
  },
  render() {
    return (
      <div ref="name" style={{
        border: "1px solid green",
        padding: "20px"
      }}>
        <div>{this.state.name}</div>
      </div>
    )
  },
  //挂载之后 mounted
  componentDidMount() {
    var self = this;
    // computed
    store.subscribe(() => {
      console.log(store.getState());
      self.setState({name: store.getState().name})
    })
  }
})

ReactDOM.render(
  <Router history>
  <div>
    <Xheader/>
    <Xfooter/>
  </div>
</Router>, document.querySelector('.example'));
