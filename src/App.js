//import React from 'react';
import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  input = '';

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }
  inputStyle = {
    fontSize:"20pt",
    padding:"5px"
  }

  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this); 
  }

   doChange(event) {
     this.input = event.target.value;
   }

   doSubmit(event){
     this.setState({
       message: 'Hello, ' + this.input + '!!'
     });
     // 下記をコメントアウトするとページが再ロードされてしまう
     // このメソッドはイベントを消費するメソッドです。
     // 消費というのは、これで発生したイベントをなくすという意味です。
     // イベントをなくすと、もう実際にフォームが送信されることはなくなります。
     event.preventDefault();
   }
   
   render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
       <label>
        <span style={this.inputStyle}></span>Message:
         <input type="text" style={this.inputStyle}
         onChange={this.doChange} />
       </label>
       <input type="submit" style={this.inputStyle} value="Click" />
      </form>
    </div>;
  }
}
export default App;