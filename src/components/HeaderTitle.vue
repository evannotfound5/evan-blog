<template>
  <h3 class="header-title"><i class="iconfont icon-huatifuhao"></i>{{props.title}}</h3>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
.header-title {
  padding-left: 24px;
  margin-bottom: 24px;
  color: var(--evan-header-text-color);
  font-size: 36px;
  .iconfont {
    font-size: 36px;
  }
}
</style>