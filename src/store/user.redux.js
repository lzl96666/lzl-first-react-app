const initial = {
  isLogin: false,
  loading: false,
  error: ''
}

export const user = (state = initial, action) => {
  switch (action.type) {
    case 'requestLogin':
      return {
        isLogin: false,
        loading: true,
        error: ''
      }
    case 'loginSuccess':
      return {
        isLogin: true,
        loading: false,
        error: ''
      }
    case 'loginFailure':
      return {
        isLogin: false,
        loading: false,
        error: action.message
      }
    default:
      return state
  }
}

export function login(uname) {
  return { type: 'login', uname }
}

// action creator
// export const login = () => dispatch => {
//   dispatch({ type: 'requestLogin' })
//   setTimeout(() => {
//     // 异步结束后，手动执行dispatch
//     dispatch({ type: 'login' })
//   }, 2000)
// }
