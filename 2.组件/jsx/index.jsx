//定义组件
var Xfooter = React.createClass({
  render: function(){
    return (
      <div style={{border:"1px solid red",padding:"20px"}}>
        这是一个底部组件
        <p>{this.props.src}</p>
        <p>{this.props.abc}</p>
      </div>
    )
  }
})
var Xheader = React.createClass({
  //S
  getInitialState: function(){
    return {
      name:"这是第一个组件1",
      skill: "123"
    }
  },
  //methods
  ok:function(){
    //v-model
    this.setState({
      name: "改变的值",
      skill: "ps"
    })
  },
  //
  name:"abc",
  //V
  render:function(){
    //view
    return (<div style={{border:"1px solid green",padding:"20px"}}>
      {this.state.name}{this.state.skill}
      <p>{name}</p>
      <p>props:{this.props.url}</p>
      <button onClick={this.ok}>ok</button>
      <Xfooter src={this.props.url} abc="bbb" />
    </div>)
  }
})


ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader url="abc.jsx" />
  <Xheader url="cbd.jsx" />
</div>, document.querySelector('.example') );
