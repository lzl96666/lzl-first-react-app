import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

// 引入组件
import Home from './page/home/home'
import From from './page/from/from'
import Index from './page/index/index'
import CartSample from './page/cartSample/index'
import Comp from './page/comp/comp'
import Hoc from './page/hoc/hoc'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/from" component={From}></Route>
        <Route path="/cartSample/:id" component={CartSample}></Route>
        <Route path="/comp" component={Comp}></Route>
        <Route path="/hoc" component={Hoc}></Route>
      </Router>
    </div>
  )
}

export default App
