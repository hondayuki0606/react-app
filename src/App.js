//import React from 'react';
import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props){
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render(){
    return <div>
      <h1>{this.title}</h1>
      <p>{this.message}</p>
    </div>
  }
}

export default App;
