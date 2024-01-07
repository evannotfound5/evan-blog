<template>
  <div class="error-box">
    <h3>您要访问的页面不存在！</h3>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.error-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  // background: url(../assets/img/404.png) no-repeat center;
  // background-size: contain;
  h3 {
    font-size: 66px;
    color: #ccc;
  }
}
</style>