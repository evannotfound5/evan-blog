<template>
  <div id="header">
    <h2><router-link to="/">evannotfound5</router-link></h2>
    <div class="btn"><i class="iconfont icon-tixing"></i></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 移动端导航栏
#header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  width: 100%;
  height: 80px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #292929;

  .btn {
    background-color: #1e1e1e;
    .iconfont::before {
      font-size: 28px;
    }
  }
}
  
@media screen and (min-width: 666px) {
  #header {
    display: none;
  }
}
</style>