<template>
  <div class="tabbaritem">
    <slot name="tabbar-img"></slot>
    <slot name="tabbar-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
};
</script>

<style>
.tabbaritem{
  font-size: 15px;
}

.tabbaritem img {
  margin-top: 3px;
  width: 20px;
}
</style>