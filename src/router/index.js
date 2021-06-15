import Vue from "vue"
import VueRouter from "vue-router"
//安装并使用Vuerouter
Vue.use(VueRouter)

//引入子组件们
//在别名引入方式适用于import,如果是DOM元素的话，则需要通过在路径前加~
const Home = ()=>import ("views/home/Home.vue")
const Cart = ()=>import ("views/cart/Cart.vue")
const Profile = ()=>import ("views/profile/Profile.vue")
const Category = ()=>import ("views/category/Category.vue")
const Detail = ()=>import ("views/detail/Detail.vue")

const routes = [
  {
    path:"/home",
    component:Home
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/detail/:iid",
    component:Detail
  }
]
//创建Vuerouter实例,并且一定要在实例routes定义完后在定义，否则看不到任何路由效果
const router = new VueRouter({
  routes,
  mode:"history"
})
export default router
