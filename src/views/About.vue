<template>
  <h3 class="header-title">关于</h3>
  <div class="about-box">
    <div class="about-content">
      <h4>Intro</h4>
      <div>
        <p>嘿，你好！我是 Evan，一个刚毕业不久的前端小白<br/>目前的状态：待业中</p>
      </div>
      <h4>Interests</h4>
      <div>
        <p>
          当我不编码时，我喜欢：<br/>
          网上冲浪：没事就瞎鼓捣 <br/>
          听歌：最喜欢的歌手是杰伦 <br/>
          溜达：就是那种漫无目的的 <br/>
        </p>
      </div>
      <h4>Contact me</h4>
      <div>
        <p>
          如果您有任何问题或只是想打个招呼，请随时通过 这里 与我联系！<br/>
          你也可以在这里找到我： <br/>
          QQ：3032317941 <br/>
          WX: evannotfound5 <br/>
        </p>
      </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
</script>

<style lang="scss" scoped>

.about-box {
  display: flex;
  padding-right: 76px;
}
.about-content {
  flex: 1;
  padding: 0 24px 48px;
}
</style>