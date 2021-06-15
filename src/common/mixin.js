import {debounce} from "./utils"
export const imgloadmixin = {
  data(){
    return {
      imgloadrefresh:null
    }
  },
  mounted() {
    this.imgloadrefresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on("imgLoadFinish",()=>{
      this.imgloadrefresh()
    })
  },
  
}