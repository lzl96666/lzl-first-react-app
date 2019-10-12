import React, { Component } from 'react'
import { Input, Cascader, DatePicker, Avatar, Button } from 'antd'
import './from.css'
// 引入基础组件
import Header from '../../base/header/header'
class From extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      website: null,
      cascader: null
    }
  }
  changeNmae(e) {
    this.setState({
      name: e.target.value
    })
  }
  changeWebsite(e) {
    this.setState({
      website: e.target.value
    })
  }
  CascaderChange(e) {
    // this.setState({
    //   cascader: e.target.value
    // })
  }
  DatePickerChange(e) {
    console.log(e)
  }
  sunmit() {
    if (this.state.name && this.state.website) {
      alert('提交成功')
    } else {
      alert('不能为空')
    }
  }
  render() {
    return (
      <div className="From">
        <Header router={this.props.location.pathname}></Header>
        <div className="From-content">
          <div>
            {' '}
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            {this.state.name}
          </div>
          <div className="From-item">
            <span className="input-labal">
              <span className="red">*</span>
              姓名：
            </span>
            <div className="input-wrapper">
              <Input
                defaultValue={this.state.name}
                placeholder="Basic usage"
                onChange={e => {
                  this.changeNmae(e)
                }}
              />
            </div>
          </div>
          <div className="From-item">
            <span className="input-labal">
              <span className="red">*</span>
              个人主站:
            </span>
            <div className="input-wrapper">
              <Input
                defaultValue={this.state.website}
                placeholder="Basic usage"
                addonAfter=".com"
                onChange={e => {
                  this.changeWebsite(e)
                }}
              />
            </div>
          </div>
          <div className="From-item">
            <Cascader
              style={{ width: 100 + '%' }}
              options={options}
              onChange={this.CascaderChange}
              placeholder="Please select"
            />
          </div>
          <div className="From-item">
            <DatePicker
              style={{ width: 100 + '%' }}
              onChange={this.DatePickerChange}
            />
          </div>
          <div className="From-item">
            <Button
              type="primary"
              onClick={() => {
                this.sunmit()
              }}
            >
              提交
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
// class Children extends Component() {
//   constructor(props) {
//     console.log(props)
//     super(props)
//   }
//   render(){
//     return(<html>children</html>)
//   }
// }
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]
export default From
