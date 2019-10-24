import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../store/user.redux'
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
export default Login
