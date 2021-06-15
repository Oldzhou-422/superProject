<template>
  <div class="detail-paramsinfo">
    <div class="paramisinfo-image">
      <img :src="paramsinfo.image" alt="">
    </div>
    <h3 class="goods-show">商品详细信息展示：</h3>
    <div class="paramsinfo-infos">
      <ul>
        <li
          class="infos-key-value"
          :key="index"
          v-for="(item, index) in paramsinfo.infos"
        >
          <span>{{ item.key }}</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div v-if="Object.keys(paramsinfo).length!==0" class="paramsinfo-sizes">
      <table>
        <tr class="paramsinfo-size-header">
          <th :key="index" v-for="(item,index) in paramsinfo.sizes[0]">
            <span>{{item[0]}}</span>
          </th>
        </tr>
        <tr class="paramsinfo-size-td">
          <td :key="index" v-for="(item,index) in paramsinfo.sizes[0]">
            <h3 :key="index" v-for="(item1,index) in item.slice(1,5)">{{item1.slice(0,2)}}</h3>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    paramsinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.goods-show {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.paramsinfo-infos {
  background-color: #eee;
}
.infos-key-value {
  display: flex;
}
.infos-key-value span {
  padding-top: 10px;
  padding-bottom: 10px;
  flex: 1;
  text-align: center;
  border: 2px solid #fff;
}

/* paramsinfo-sizes */
.paramsinfo-sizes{
  margin-top: 20px;
}
.paramsinfo-sizes table{
  width: 100%;
  background-color: lightgray;
}
.paramsinfo-size-header{

  display: flex;
}

.paramsinfo-size-header th{
  height: 40px;
  line-height:40px;
  flex: 1;
  border: 2px solid #eee;
}

.paramsinfo-size-td{
  display: flex;

}

.paramsinfo-size-td td{
  flex: 1;
  text-align: center;

}
.paramsinfo-size-td td h3{
  height: 30px;
  line-height: 30px;
  border: 2px solid #eee;
}

</style>
