<template>
  <HeaderTitle :title="`日常${$route.params.id}`"></HeaderTitle>
  <div class="photos-box">
    <div class="photos-content">
      照片分类详情页 {{ $route.params.id }}
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';
</script>

<style lang="scss" scoped>
.photos-box { 
  display: flex;
  padding: 0 24px 48px;
  .photos-list {
    flex: 1;
    margin-right: 64px;
  }
}
</style>