import React, { Component } from 'react'
// import RadioGroup from 'antd/lib/radio/group'

export default class hoc extends Component {
  render() {
    return (
      <div>
        <Newkaikeba state="react组件化" />
        {/* // fetcher */}
        <Fetcher name="getUser">
          {(
            { name, age } //props.children
          ) => (
            <p>
              {name}-{age}
            </p>
          )}
        </Fetcher>
        <RadioGroup name="mvvm">
          <Radio>vue</Radio>
          <Radio>react</Radio>
          <Radio>anglues</Radio>
        </RadioGroup>
      </div>
    )
  }
}

/* React.cloneElement(
   element,
   [props],
   [...children]
 )
*/
function RadioGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { name: props.name, xixi: '1' })
      })}
    </div>
  )
}

function Radio({ children, ...rest }) {
  console.log(children)
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  )
}

function Fetcher(props) {
  console.log(props.children)
  //请求数据 发给视图层
  const user = Api[props.name]()
  return props.children(user)
}
const Api = {
  getUser() {
    return { name: 'lzl', age: '18' }
  }
}

// 展示组件

class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.state} - {this.props.name}
      </div>
    )
  }
}

const WithLog = Comp => {
  console.log(Comp.name + '  with-log')
  return props => <Comp {...props}></Comp>
}

// 高阶组件
const withKaikeba = Comp => {
  const name = '高阶组件'
  console.log('withKaikeba')
  // return props => <Comp {...props} name={name}></Comp>
  return class extends React.Component {
    render() {
      return <Kaikeba name={name} {...this.props}></Kaikeba>
    }
  }
}

const Newkaikeba = WithLog(withKaikeba(WithLog(Kaikeba)))
