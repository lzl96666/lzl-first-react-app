import React, { Component } from 'react'
import './index.css'

import logo from './logo.svg'
import { Button } from 'antd'
const buttons = [
  {
    path: '/home',
    name: 'home'
  },
  {
    path: '/from',
    name: '去from表单'
  },
  {
    path: '/cartSample/three',
    name: '去购物车'
  },
  {
    path: '/comp',
    name: '组件化'
  },
  {
    path: '/hoc',
    name: 'hoc'
  },
  {
    path: '/hook',
    name: 'hook'
  },
  {
    path: '/context',
    name: 'context'
  },
  {
    path: '/redux',
    name: 'redux'
  }
]
class Index extends Component {
  buttonClick(router) {
    this.props.history.push(router)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>MY FIRST REACT APP</p>
          {buttons.map((item, index) => (
            <div key={index} className="button-container">
              {' '}
              <Button
                type="primary"
                onClick={e => {
                  this.buttonClick(item.path)
                }}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </header>
      </div>
    )
  }
}
export default Index
