import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hello1 from './page/hello1'
import Hello2 from './page/hello2'
import Hello3 from './page/hello3'
import Antd from './page/antd/antd'
class Myrouter extends Component {
  render() {
    return (
    <Router>
      <Route exact path="/" component={Hello1} />
      <Route path="/hello2" component={Hello2} />
      <Route path="/hello3" component={Hello3} />
      <Route path='/antd' component={Antd}/>
    </Router>
    );
  }
}
export default Myrouter