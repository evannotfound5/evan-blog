<script setup>
import SideBar from './layout/SideBar.vue'
import Header from './layout/Header.vue'
</script>

<template>
  <SideBar></SideBar>
  <div id="main">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// 浏览器滚动条
::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}
//滑块部分
::-webkit-scrollbar-thumb { 
  border-radius: 5px;
  background-color: var(--evan-card-text-color);
}
//轨道部分
::-webkit-scrollbar-track {
  background: var(--main-card-bg-color);
  border-radius: 5px;
}

#main {
  flex: 1;
  // 当子元素超出时，自动出现滚动条
  overflow: auto;
  position: relative;
  .container {
    padding: 80px 48px;
  }
}
</style>
