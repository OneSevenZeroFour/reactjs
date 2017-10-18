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
  getInputValue(event){
    console.log(event.target.value)
    this.setState({
      name:event.target.value
    })
  },
  getSelectValue(event){
    console.log(event.target.value)
    this.setState({
      selectValue:event.target.value
    })
  },
  getTextArea(event){
    console.log(event.target.value)
  },
  send(){
    var self = this;
    axios.get(this.props.url + this.state.name)
      .then(function (response) {
      self.setState({
        answer:response.data.text
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  //V
  render(){
    //view
    return (<div ref="name" style={{border:"1px solid green",padding:"20px"}}>
    <div>
      <p style={{color:'red'}}>input</p>
      <input onChange={this.getInputValue} />
      <button onClick={this.send}>发送</button>
      <p>{this.state.answer}</p>

      <p style={{color:'red'}}>select</p>
      <select value={this.state.selectValue} onChange={this.getSelectValue}>
        <option value='1'>a</option>
        <option value='2'>b</option>
        <option value='3'>c</option>
      </select>
      <p>{this.state.selectValue}</p>

      <p style={{color:'red'}}>textarea</p>
      <textarea onChange={this.getTextArea}></textarea>
    </div>
    </div>)
  },
  //挂载之后 mounted
  componentDidMount(){
    console.log("----------------componentDidMount------------------")
    console.log(this.refs)
    console.log(this.state)
  }
})


ReactDOM.render(
//view
<div>
  {/*注释*/}
  <Xheader url="http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=" />
</div>, document.querySelector('.example') );
