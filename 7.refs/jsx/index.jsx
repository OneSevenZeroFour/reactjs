var Xheader = React.createClass({
  //S
  //JSX directive filter
  getInitialState(){
    return {
      name:"laoyao",
      answer:"",
      selectValue:"2"
    }
  },
  abcdefghij(){},
  //V
  render(){
    //view
    return (<div ref="name" style={{border:"1px solid green",padding:"20px"}}>
    <div>
      <button onClick={this.test}>ok</button>
      <p ref="ppp">{this.state.name}</p>
    </div>
    </div>)
  },
  test(){
    console.log(this)
  },
  //挂载之后 mounted
  componentDidMount(){
    console.log("----------------componentDidMount------------------")
    console.log(this.refs.ppp)
    this.refs.ppp.style.color = "#58bc58"
    this.refs.ppp.addEventListener("click",function(){
      console.log("abc")
    })
    //把节点交给了jq处理
    $(this.refs.ppp).css('font-size','50px')
  }
})


ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader na="sadasd" />
</div>, document.querySelector('.example') );
