<template>
  <div id="newstyle">
    <TabBarItem v-for="(item,index) in list" :key="index">
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">新款商品{{item}}</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "components/maintabbar/TabBarItem.vue"

export default {
  name: 'NewStyle',
  data() {
  return{
    list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  }
},
  components: {
    TabBarItem,
  }

}
</script>

<style>
#newstyle{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  

}
#newstyle>div{
  background-color: aqua;
  width: 46%;
  height: 200px;
  margin-top: 10px;
  position: relative;
}
#newstyle img{
  width: 150px;
}
#newstyle .tabbaritem div{
  position: absolute;
  bottom: 3px;
  width: 100%;
}
</style>