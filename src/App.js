import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

// 引入组件
import Home from './page/home/home'
import From from './page/from/from'
import Index from './page/index/index'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/from" component={From}></Route>
      </Router>
    </div>
  )
}

export default App
