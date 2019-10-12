const initial = {
  isLogin: false,
  loading: false
}

export const user = (state = initial, action) => {
  switch (action.type) {
    case 'requestLogin':
      return {
        isLogin: false,
        loading: true
      }
    case 'login':
      return {
        isLogin: true,
        loading: false
      }
    default:
      return state
  }
}

// action creator
export const login = () => dispatch => {
  dispatch({ type: 'requestLogin' })
  setTimeout(() => {
    // 异步结束后，手动执行dispatch
    dispatch({ type: 'login' })
  }, 2000)
}
