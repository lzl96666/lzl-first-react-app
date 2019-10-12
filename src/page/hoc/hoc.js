import React, { Component } from 'react'
import MyIcon from '../../base/my-icon/myIcon'
// import { Icon } from 'antd'
import './hoc.css'
// import RadioGroup from 'antd/lib/radio/group'

export default class hoc extends Component {
  render() {
    return (
      <div className="hoc">
        {/* 自定义图标 */}
        <div>
          <MyIcon type="icon-food-pizza"></MyIcon>
        </div>
        <Kaikeba state="react组件化" />

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

        {/* 组件化 */}
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
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  )
}

function Fetcher(props) {
  // console.log(props.children) 视图内的func
  //请求数据 发给视图层
  const user = Api[props.name]()
  return props.children(user)
}
const Api = {
  getUser() {
    return { name: 'lzl', age: '18' }
  }
}

// const withLog = Comp => {
//   console.log(Comp.name + '  with-log')
//   return props => <Comp {...props}></Comp>
// }

const withLog = Component => {
  class NewComponent extends React.Component {
    render() {
      return <Component {...this.props} />
    }
    componentDidMount() {
      console.log(Component.name, 'didMount', this.props)
    }
  }
  return NewComponent
}

// 高阶组件

// const withKaikeba = Component => {
//   const name = 'withKaikeba给了一个name'
//   console.log('withKaikeba')
//   const NewComponent2 = props => {
//     return <Component {...props} name={name} />
//   }
//   return NewComponent2
// }

const withKaikeba = Comp => {
  const name = '高阶组件'
  console.log('withKaikeba')
  // return props => <Comp {...props} name={name}></Comp>
  return class xixixi extends React.Component {
    render() {
      return <Comp name={name} {...this.props}></Comp>
    }
  }
}

// 展示组件
@withLog
@withKaikeba
class Kaikeba extends Component {
  render() {
    return (
      <div>
        {this.props.state} - {this.props.name}
      </div>
    )
  }
}

// const Newkaikeba = WithLog(withKaikeba(WithLog(Kaikeba))) //可采用@修饰符
