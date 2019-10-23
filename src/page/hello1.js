// 创建Hello2.js组件文件
// 1. 引入React模块
// 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先拿到React。
import React from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom'

// 2. 使用function构造函数创建组件
function Hello1(props){
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来React</h2>
           <Link to='/hello2'>hello2.js</Link>
           <Link to='/hello3'>hello3.js</Link>
           <Link to='/antd'>antd.js</Link>
        </div>    
      </div>
  )
}
// 3. 导出组件
export default Hello1
