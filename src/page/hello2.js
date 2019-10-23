// 创建Hello2.js组件文件
// 1. 引入React模块
// 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先拿到React。
import React from 'react'

// 2. 使用function构造函数创建组件
function Hello2(props){
  return (
    <div>
      <div>这是Hello2组件</div>
      <h1>这是大大的H1标签，我大，我骄傲！！！</h1>
      <h6>这是小小的h6标签，我小，我傲娇！！！</h6>
    </div>
  )
}
// 3. 导出组件
export default Hello2
