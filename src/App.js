//import React from 'react';
import React, {Component} from 'react';
import Rect from './Rect';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  render(){
    return <div>
      <h1>React</h1>
      <p><Rect x="50" y="50" w="150" h="150" c="cyan" r="50"/></p>
      <p><Rect x="150" y="100" w="150" h="222" c="black" r="75"/></p>
      <p><Rect x="100" y="150" w="150" h="150" c="magenta" r="25"/></p>
    </div>;
  }
}

export default App;