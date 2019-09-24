import api from './axios/index'

export function getHomeContent(page_num, page_size) {
  const url = `/goodList`
  const obj = {
    page_num: page_num,
    page_size: page_size
  }
  return api.getJson(url, obj)
}
