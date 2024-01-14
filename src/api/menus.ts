//api管理
import request from "@/utils/request"

//定義類型
type Common<T> = {
  code: string
  data: T
  mesg: string
  time: string
}
//獲取所有menu data
export const getAll = () =>{
  return request({
    method: "GET",
    url: '/boss/menu/getAll',
  })
}

//獲取指定id的菜單信息
export const getEditMenuInfo =( id => {
  return request({
    method: "GET",
    url: '/boss/menu/getEditMenuInfo',
    params: {
      id
    }
  })
})