import React, { Component } from 'react';

import './App.css';
import Myrouter from './router'
 
class App extends Component {
  render() {
    return (
      <div>
        App.js全局
       <Myrouter></Myrouter>
    </div>

    );
  }
}
 
export default App;