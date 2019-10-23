// 创建Hello2.js组件文件
// 1. 引入React模块
// 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先拿到React。
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Hello4 from './hello4'
import Hello5 from './hello5'

function test(){
  alert("222")
}

// Person类的构造函数
function Person(name,age){
  this.name= name
  this.age = age
}
Person.prototype.say=function(){
  console.log(this)
   console.log(`我叫${this.name}，今年${this.age}岁了`)
}
let stu = new Person("小胡",'10')
stu.say()


// Student 继承 Person  es5 组合
function Student(name,age,score){
  Person.call(this, name, age);
  this.score = score
}
Student.prototype = new Person();
Student.prototype.study = function(){
  console.log("疯狂学习考了"+this.score+"分")
}
let stu2 = new Student("小月",'11','100分')
stu2.say()
stu2.study()


// Teacher 继承 Person  es6
class Teacher extends Person{
  constructor(name,age,subject){
     super(name,age)
     this.subject = subject
  }
  teach(){
    console.log("我是教"+this.subject+"的")
  }
}
let stu3 = new Teacher("王老师",'35','语文')
stu3.say()
stu3.teach()




class Hello3 extends Component{
  constructor(props){
    super(props)
    this.state = {
      gender: 'male'
    }
  }
  handleBtnClick(arg1, arg2) {
    console.log(this)
    this.setState({
      gender: '在构造函数中绑定this并传参' + arg1 + arg2
    });
  }
  handleBtnClick2(arg1, arg2) {
    console.log(this)
    this.setState({
      gender: 'male'
    });
    test();
  }
  componentDidMount() {
  }
  render(){
    return (
<div>
    <div>这是Hello3组件</div>
     <div>{this.state.gender}</div>

     <button onClick={()=>{ this.handleBtnClick("参数1","参数2") }}>事件中this的处理</button>
     <button onClick={()=>{ this.handleBtnClick2("参数1","参数2") }}>事件中this的处理2</button>
     {/* <button onClick={test()}>普通函数</button> */}
     <div>
   
     </div>
     <Link to='/hello3/hello4'>子路由hello4.js</Link>
     <Link to='/hello3/hello5'>子路由hello5.js</Link>
     <Router>
      <Route exact path="/hello3/hello4"  component={Hello4} />
      <Route exact path="/hello3/hello5" component={Hello5} />
    </Router>
  </div>
    )
    
  }
}

//
// class Name extends React.Component {
//   constructor(props) {
//      super(props)
//      console.log(this.props)  // 如果使用super() 这里输出undefined
//   }
//   render() {
//     return (
//       <h1>{this.props.name}</h1>
//     );
//   }
// }

// 2. 使用function构造函数创建组件

// 3. 导出组件
export default Hello3
