import axios from 'axios'
const baseUrl = 'http://liuzilu.club:7300/mock/5d76f3ae61b56a128c4a3afa/shop/v1'

function P(type, url, params) {
  // params = getToken(params)
  var self = this
  this.then = function(resolve) {
    axios({
      method: type,
      url: baseUrl + url,
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.error('axios请求失败')
        console.error(err)
      })
    return this
  }
  this.catch = function(reject) {
    self.reject = reject
    return this
  }
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

function getJson(url, params) {
  return new P('GET', url, params)
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function postJson(url, params) {
  console.log(params)
  return new P('POST', url, params)
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function putJson(url, params) {
  return new P('PUT', url, params)
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function deleteJson(url, params) {
  return new P('DELETE', url, params)
}

// export function getToken(params) {
//   let token = store.state.token
//   if (token) {
//     params.token = token
//   }
//   return params
// }

export default {
  getJson,
  postJson,
  putJson,
  deleteJson
}
