//import React from 'react';
import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  msgStyle1 = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px",
    borderBottom:"2px solid #900"
  }
  msgStyle2 = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px",
    color:"White",
    backgroundColor:"#900",
    borderBottom:"2px solid #900"
  }
  btnStyle = {
    fontSize:"16px",
    padding:"0px 10px",
  }

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      tests: 0,
      msg:'count start!',
      flg:true,
    };
    this.doAction = this.doAction.bind(this);
   }

   doAction(e){
      this.setState((state)=>({
      counter: state.counter + 1,
      msg: `count: `+ state.counter+ state.tests,
      flg: !state.flg,
    }));
   }
   render(){
    return <div>
      <h1>React</h1>
      {this.state.flg ?
      <p style={this.msgStyle1}>{this.state.msg}</p>
      :
      <p style={this.msgStyle2}>{this.state.msg}</p>
      }

      <button style={this.btnStyle} onClick={this.doAction}>click</button>
    </div>;
  }
}

export default App;