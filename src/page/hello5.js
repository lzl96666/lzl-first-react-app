// 创建Hello2.js组件文件
// 1. 引入React模块
// 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先拿到React。
import React, { Component } from 'react';

class Hello5 extends Component{
  constructor(props){
    super()
    this.state = {
      gender: 'male'
    }
  }
  componentWillMount() {
    console.log("componentWillMount") // null
    this.setState({
      gender: 'female'
    })
  }
  render(){
    return (
<div>
    <div>这是Hello5组件</div>
  </div>
    )
    
  }
}

// 2. 使用function构造函数创建组件

// 3. 导出组件
export default Hello5
