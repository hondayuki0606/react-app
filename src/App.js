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
      msg:'Hello',
    };

    let timer = setInterval (()=>{
      this.setState((state)=>({
          msg: state.msg +"!"
        }));
      },10000);
   }
    render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}

export default App;