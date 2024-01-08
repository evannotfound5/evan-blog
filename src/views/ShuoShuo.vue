<template>
  <h3 class="header-title">说说</h3>
  <div class="shuoshuo-box">
    <div class="shuoshuo-content">说说页</div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
</script>

<style lang="scss" scoped>

.shuoshuo-box {
  display: flex;
  padding-right: 76px;
}
.shuoshuo-content {
  flex: 1;
  padding: 0 24px 48px;
}
</style>