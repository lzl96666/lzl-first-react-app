import React, { Component } from 'react'
import './index.css'

import logo from './logo.svg'
import { Button } from 'antd'
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
          <div className="button-container">
            {' '}
            <Button
              type="primary"
              onClick={e => {
                this.buttonClick('/home')
              }}
            >
              去home
            </Button>
          </div>
          <div className="button-container">
            {' '}
            <Button
              type="primary"
              onClick={e => {
                this.buttonClick('/from')
              }}
            >
              去from表单
            </Button>
            <div className="button-container">
              <Button
                type="primary"
                onClick={e => {
                  this.buttonClick('/cartSample/three')
                }}
              >
                去购物车
              </Button>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default Index
