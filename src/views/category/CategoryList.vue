<template>
  <div id="categroylist">
    <!-- 导航列表 -->
    <div id="categroylistleft" >
      <div v-for="(item , index) in categroylist" :key="index" class="liststyle">
       <router-link to = "/category/now">
         {{item.title}}
       </router-link>
       <!-- 在这里做测试{{item}} -->
       </div>
    </div>
    
    <!-- 商品展示 -->
    <div id="categroylistshow">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Now from "./categroylist/Now.vue"

export default {
  name: "CategroyList",
  data() {
    return{
      categroylist: [
        {
          router: "/category/now",
          title: "正在流行",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]   
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]   
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]   
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]    
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]    
        },
        {
          router: "jacket",
          title: "夹克",
          type: ["秋款上新","时尚套装","连衣裙","T恤","牛仔裤","卫衣","秋款外套","衬衫","男休闲裤","男牛仔裤","五分裤","帆布鞋","运动鞋"]    
        },
      ]
    }
  },
  computed: {
    routersrc() {
      src = "/category/" + item.router
      return src
    }
  },
  components: {
    // Now,
  }
}
</script>

<style>
#categroylist{
  display: flex;
  flex-wrap: wrap;
}
#categroylistleft{
  width: 25%;

}
#categroylistshow{
  width: 75%;
}
.liststyle{
  background-color: bisque;
  height: 30px;
  border: 2px solid brown;
}
</style>