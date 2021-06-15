import {request} from "./request.js"

//发送轮播图的图片和推荐图片的src的请求
export function gethomemultidata(){
  return request({
    url:"/home/multidata"
  })
}

//发送首页下方商品展示列表的数据请求
export function gethomeGoodsdata(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}

