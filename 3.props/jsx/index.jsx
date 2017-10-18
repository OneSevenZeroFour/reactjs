var Xheader = React.createClass({
  //
  name:"abc",
  //V
  render:function(){
    //view
    return (<div style={{border:"1px solid green",padding:"20px"}}>
    <div>
      {this.props.isshow=="true"?this.props.content:""}
    </div>
    </div>)
  }
})


ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader isshow="true" content="你好" />
  <Xheader isshow="false" content="xxx" />
</div>, document.querySelector('.example') );
