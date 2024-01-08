<template>
  <h3 class="header-title">Vim入门指南{{ $route.params.id }}</h3>
  <div class="post-box">
    <div class="post-content">
      文章详情页
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
</script>

<style lang="scss" scoped>
.post-box {
  display: flex;
  padding-right: 76px;
}
.post-content {
  flex: 1;
  padding: 0 24px 48px;
}
</style>