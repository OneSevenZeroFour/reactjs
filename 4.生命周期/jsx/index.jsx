var Xfooter = React.createClass({
  render(){
    return (<div style={{border:"1px solid green",padding:"20px"}}>{this.props.input}</div>)
  },
  componentWillReceiveProps(){
    console.log("----------------componentWillReceiveProps------------------")
  }
})

var Xheader = React.createClass({
  //S
  getInitialState(){
    return {
      name:"laoyao"
    }
  },
  getInputValue(event){
    console.log(event.target.value)
    this.setState({
      name:event.target.value
    })
  },
  //V
  render(){
    //view
    return (<div ref="name" style={{border:"1px solid green",padding:"20px"}}>
    <div>
      <input onChange={this.getInputValue} />
      {this.props.isshow=="true"?this.props.content:""}
      <Xfooter input={this.state.name} />
    </div>
    </div>)
  },
  //挂载之前 beforeMounted
  componentWillMount(){
    console.log("----------------componentWillMount------------------")
    console.log(this.refs)
    console.log(this.state)
  },
  //挂载之后 mounted
  componentDidMount(){
    console.log("----------------componentDidMount------------------")
    console.log(this.refs)
    console.log(this.state)
  },
  componentWillReceiveProps(){
    console.log("----------------componentWillReceiveProps------------------")
    console.log(this.refs)
    console.log(this.state)
  },
  //性能的转折点
  shouldComponentUpdate(){
    if(this.state.name.length>9){
        return true
    }else{
        return false
    }
  },
  //更新之前 beforeUpdated
  componentWillUpdate(){
    console.log("----------------componentWillUpdate------------------")
    console.log(this.refs)
    console.log(this.state)
  },
  //更新之后 updated
  componentDidUpdate(){
    console.log("----------------componentDidUpdate------------------")
    console.log(this.refs)
    console.log(this.state)
  }
  //路由切换 v-if 销毁
  componentWillUnmount(){
  }

})


ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader isshow="true" content="你好" />
</div>, document.querySelector('.example') );
