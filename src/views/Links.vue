<template>
  <h3 class="header-title">友链</h3>
  <div class="link-box">
    <div class="main-content">   
    <h4>推荐</h4>
    <div class="links">
      <div v-for="(item, index) in 8" :key="index" class="link-item">
        <a href="#">
          <div class="avatar">
            <img src="../assets/img/avatar.jpg" alt="">
          </div>
          <div class="info">
            <h5 class="title">JerryC</h5>
            <span class="desc">代码改变世界</span>
          </div>
        </a>
      </div>
    </div>
    <h4>值得一读</h4>
    <div class="links">
        <div v-for="(item, index) in 18" :key="index" class="link-item">
          <a href="#">
            <div class="avatar">
              <img src="../assets/img/avatar.jpg" alt="">
            </div>
            <div class="info">
              <h5 class="title">JerryC</h5>
              <span class="desc">代码改变世界</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
</script>

<style lang="scss" scoped>

.link-box {
  display: flex;
  padding-right: 76px;
}
.main-content {
  flex: 1;
  padding: 0 24px 48px;
  h4 {
    margin-top: 4px;
    margin-bottom: 20px;
    color: var(--evan-header-text-color);
    font-size: 28px;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    .link-item {
      margin-right: 16px;
      margin-bottom: 16px;
      a {
        position: relative;
        display: flex;
        align-items: center;
        width: 246px;
        height: 76px;
        background-color: var(--main-card-bg-color)66;
        backdrop-filter: blur(20px);
        border: 1px solid #292929;
        border-radius: 10px;
        transition: all .35s ease-in-out;    

        &:hover {
          transform: translateY(-6px);
          .title {
            color: #eee;
          }
        }

        .title {
          color: #999;
        }

        .desc {
          color: var(--main-text-color);
        }

        .avatar img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          margin-left: 12px;
          margin-right: 20px;
          vertical-align: middle;
        }
        .info {
          .title {
            font-size: 20px;
            margin-bottom: 4px;
          }
          .desc {
            font-size: 14px;
          }
        }
      }   
    }
  }
}
</style>