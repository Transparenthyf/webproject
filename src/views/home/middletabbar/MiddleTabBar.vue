<template>
  <div id="middletabbar">
    <div id="middlenav">
      <router-link to = "fashion"><div>流行</div></router-link>
      <router-link to = "newstyle"><div>新款</div></router-link>
      <router-link to = "choiceness"><div>精选</div></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "MiddleTabBar",
}
</script>

<style>
#middletabbar{
width: 100%;
}
#middlenav{
  background-color: aquamarine;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  line-height: 40px;

  position: sticky;
  top: 46px;
  z-index: 10;
}
#middletabbar a{
  text-decoration: none;
}

</style>