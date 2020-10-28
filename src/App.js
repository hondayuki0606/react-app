//import React from 'react';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  render(){
    return <div>
      <h1>React</h1>
      <p><Rect x="50" y="50" w="150" h="150" c="cyan" /></p>
      <p><Rect x="150" y="150" w="150" h="150" c="black" /></p>
    </div>
  }
}
class Rect extends Component {
  x = 0;
  y = 0;
  witdh = 0;
  height = 0;
  color = "black"
  style = {};
  constructor(props){
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.witdh = props.w;
    this.height = props.h;
    this.color = props.c;
    this.style = {
      backgroundColor:this.color,
      position:"absolute",
      left:this.x + "px",
      top:this.y + "px",
      witdh:this.witdh + "px",
      height:this.height + "px",
    }
  }
  render(){
    return <div style={this.style}>tete</div>
  }
}


export default App;
