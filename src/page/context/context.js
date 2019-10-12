import React, { useContext } from 'react'

//创建上下文
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

function Child1(prop) {
  return <div>Child : {prop.lzl}</div>
}

// 使用hook 消费
function Child2(prop) {
  const obj = useContext(MyContext)
  return <div>Child2 : {obj.lzl}</div>
}

// 使用class

class Child3 extends React.Component {
  static contextType = MyContext
  render() {
    return <div>Child2 : {this.context.lzl}</div>
  }
}

export default function context() {
  return (
    <div>
      <Provider value={{ lzl: 18 }}>
        {/* 消费方法一 Consumer  */}
        <Consumer>{value => <Child1 {...value} />}</Consumer>
        {/* 消费方法二 hook */}
        <Child2></Child2>
        {/* 消费方法三 class */}
        <Child3></Child3>
      </Provider>
    </div>
  )
}
