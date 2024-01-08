<script setup>
import { ref } from 'vue'

import SideBar from './layout/SideBar.vue'
import Header from './layout/Header.vue'

const mainRef = ref(null)
const backToTopRef = ref(null)

// 控制返回顶部按钮的显示与否
const mainScroll = (e) => {
  if (e.target.scrollTop > 500) {
    backToTopRef.value.style.visibility = 'visible'
  } else {
    backToTopRef.value.style.visibility = 'hidden'
  }
}

// 返回顶部 
const scrollToTop = () => {
  mainRef.value.scrollTop = 0
}
</script>

<template>
  <SideBar></SideBar>
  <div id="main" ref="mainRef" @scroll="mainScroll">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="tools-container">
      <ul class="tools-list">
        <li @click="scrollToTop" ref="backToTopRef" class="back-to-top" title="返回顶部"><i class="iconfont icon-arrow-up"></i></li>
      </ul>
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
  position: relative;
  flex: 1;
  // 当子元素超出时，自动出现滚动条
  overflow: auto;
  // 丝滑滚动
  scroll-behavior: smooth;
  .container {
    padding: 80px 48px;
  }
}

.tools-container {
  position: fixed;
  right: 16%;
  bottom: 50px;
  z-index: 999;
  .tools-list {
    display: flex;
    flex-direction: column;
    li {
      width: 42px;
      height: 42px;
      background-color: #1e1e1e;
      border: 1px solid var(--evan-card-borer-color);
      border-radius: 50%;
      text-align: center;
      line-height: 36px;
      transition: visibility .35s;
      cursor: pointer;

      &.back-to-top {
        visibility: hidden;
      }

      &:hover {
        background-color: #232328;
        border: 0;
        .iconfont {
          color: var(--evan-card-text-color);
        }
      }
    }
  }
}
</style>
