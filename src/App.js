import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { login } from './store/user.redux'
// 引入组件
import Home from './page/home/home'
import From from './page/from/from'
import Index from './page/index/index'
import CartSample from './page/cartSample/index'
import Comp from './page/comp/comp'
import Hoc from './page/hoc/hoc'
import Hook from './page/hookTest/hookText'
import Context from './page/context/context'
import Redux from './page/redux/redux'

function Nofind(props) {
  return (
    <div>
      <div> {props.location.pathname}没有找到页面</div>
      <div>
        <Route path="/" component={() => <div>《路由组件嵌套》</div>}></Route>
      </div>
    </div>
  )
}

//路由守卫
// 希望用法：<PrivateRoute path="/xxx" ....></PrivateRoute>
const ProvateRoute = connect(state => ({ isLogin: state.user.isLogin }))(
  ({ component: Comp, isLogin, ...rest }) => {
    // render:
    return (
      <Route
        {...rest}
        render={props =>
          isLogin ? (
            <Comp {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { redirect: props.location.pathname }
              }}
            />
          )
        }
      ></Route>
    )
  }
)

// 登录组件
const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading,
    error: state.user.error
  }),
  { login }
)(({ location, isLogin, login, loading, error }) => {
  const redirect = location.state.redirect || '/'
  const [uname, setUname] = useState('') // 用户名输入状态
  if (isLogin) {
    return <Redirect to={redirect} />
  }

  return (
    <div>
      <p>用户登录</p>
      <hr />
      {/* 显示错误信息 */}
      {error && <p>{error}</p>}
      {/* 输入用户名 */}
      <input
        type="text"
        onChange={e => setUname(e.target.value)}
        value={uname}
      />
      <button onClick={() => login(uname)} disabled={loading}>
        {loading ? '登陆中。。。' : '登陆'}
      </button>
    </div>
  )
})

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <ProvateRoute path="/home" component={Home}></ProvateRoute>
          <Route path="/from" component={From}></Route>
          <Route path="/cartSample/:id" component={CartSample}></Route>
          <Route path="/comp" component={Comp}></Route>
          <Route path="/hoc" component={Hoc}></Route>
          <Route path="/hook" component={Hook}></Route>
          <Route path="/context" component={Context}></Route>
          <Route path="/redux" component={Redux}></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={Nofind}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
