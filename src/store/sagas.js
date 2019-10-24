//  call()调用异步函数  put()通知状态更新 takeEvery()监听action
import { call, put, takeEvery } from 'redux-saga/effects'

// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === 'Jerry') {
          resolve({ id: 1, name: 'Jerry', age: 20 })
        } else {
          reject('用户名或密码错误')
        }
      }, 1000)
    })
  },
  asyncAdd() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.random()
        if (random > 0.5) {
          resolve()
        } else {
          reject(random)
        }
      }, 1000)
    })
  }
}
// worker Saga
function* login(action) {
  try {
    yield put({ type: 'requestLogin' })
    const result = yield call(UserService.login, action.uname)
    yield put({ type: 'loginSuccess', result })
  } catch (message) {
    yield put({ type: 'loginFailure', message })
  }
}
function* asyncAdd(action) {
  try {
    const result = yield call(UserService.asyncAdd)
    yield put({ type: 'add' })
  } catch (message) {
    // yield put({ type: 'loginFailure', message })
    alert('异步添加失败' + message)
  }
}
function* mySaga() {
  yield takeEvery('login', login)
  yield takeEvery('asyncAdd', asyncAdd)
}
export default mySaga
