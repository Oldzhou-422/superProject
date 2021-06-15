import { request } from "./request";

export function getDetailTopImages(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}
export function getRecommends(){
  return request({
    url:"/recommend"
  })
}
export class Goods{
  constructor(itemInfo,services,columns){
    this.columns = columns
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.desc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
  }
}
export class shop{
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.cFans = shopInfo.cFans
    this.cGoods = shopInfo.cGoods
    this.cSell = shopInfo.cSells
  }
}
export class paramsinfo{
  constructor(info,rule){
    this.image = info.images ? info.images[0]:'';
    this.infos = info.set ;
    this.sizes = rule.tables;

  }
}