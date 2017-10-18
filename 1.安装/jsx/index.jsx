//定义组件
var Xfooter = React.createClass({
  render: function(){
    return (
      <div>
        这是一个底部组件
      </div>
    )
  }
})
var Xheader = React.createClass({
  render:function(){
    //state
    this.state = {
      name:"这是第一个组件1",
      ok:function(){
        console.log("a")
      }
    }
    //view
    return (<div>
      {this.state.name}
      <button onClick={this.state.ok}>ok</button>
      <Xfooter />
    </div>)
  }
})

//State
var data = {
  name:"Hello1, world!",
  bool:true,
  style:{
    color:"red",
    fontSize:"30px"
  },
  size:"40px",
  //v-for v-html
  html:[<p key="1">123<span>456</span></p>],
  arrs:["a","b","c"],
  arr:[<p key="1">1</p>,<p key="2" style={{color:'red'}}>2</p>],
  ed:function(data){
    return data+"ed"
  },
  test:function(){
    console.log("abc")
  },
  content:"asdasd"
}
ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader />
  <h1>{data.name}</h1>
  <h1>{1+1}</h1>
  <p>{data.bool?"这是真":"这是假"}</p>
  <p id={data.name} name={!data.bool?"有名字":"没名字"}>属性值上面</p>
  <p style={data.style}>设置样式1</p>
  <p style={{color:"red",fontSize:data.size}}>设置样式2</p>
  <div>{data.arr}</div>
  <div>{data.html}</div>
  <div>{(function(){
    return <p>123<span>789</span></p>
  })()}</div>
  <div>{(function(){
    //M
    var data = 101112;
    //V
    return <p>123<span>789</span><span>{data}</span></p>
  })()}</div>
  <div><ul>{
    data.arrs.map(function(item,index){
      if(item=="a"){
        return <li key={index}>{item}aa</li>
      }else{
        return <li key={index}>{item}</li>
      }
    })
  }</ul></div>
  <div>{data.ed(data.name)}</div>
  <div>{data.content||"加载中..."}</div>
  <div id={(function(){
    return "这是一个ID"
  })()}>{data.ed('abc')}</div>
  <button onClick={data.test}>OK</button>
</div>, document.querySelector('.example') );
