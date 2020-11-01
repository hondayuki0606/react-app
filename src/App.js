//import React from 'react';
import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px",
  }
  btnStyle = {
    fontSize:"20px",
    padding:"0px 10px",
  }

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      msg:'count start!',
    };
    this.doAction = this.doAction.bind(this);
   }

   doAction(e){
      this.setState((state)=>({
      counter: state.counter + 1,
      msg: `count: `+ state.counter
    }));
   }
    render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <button style={this.btnStyle} onClick={this.doAction}>click</button>
    </div>;
  }
}

export default App;