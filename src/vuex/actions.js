import axios from 'axios'
import {REQUESTING,REQUEST_SUCCESS,REQUEST_ERROR} from './mutation-types'
export default {
  search ({commit},searchName) {
    //更新状态（LOADING）
    commit(REQUESTING)
    //发送ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url).then(
      response => {
        const result = response.data
        const users = result.items.map(item => ({
          url: item.html_url,
          imgUrl: item.avatar_url,
          name:item.login
        }))
        //更新状态（成功）
        commit(REQUEST_SUCCESS,{users})
      }).catch(error => {
        commit(REQUEST_ERROR,{msg: '请求失败'})
    })
  }
}
