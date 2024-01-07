
<template>
  <h3 class="header-title">照片墙</h3>
  <div class="photo-box">
    <div class="photo-content">
      <div v-for="(item, index) in 3" :key="index" class="link-item">
        <a href="#">
          <h4 class="photo-cate">日常</h4>
          <div class="photo-cate-desc">记录日常生活</div>
        </a>
      </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
// https://mysource-hexo.wyun521.top/img/avatar/5.jpg
</script>
<style lang="scss" scoped>
.header-title {
  padding-left: 24px;
  margin-bottom: 24px;
  color: var(--main-text-color);
  font-size: 36px;
}
.photo-box {
  display: flex;
  .photo-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px 48px;
    .link-item {
      margin-right: 16px;
      margin-bottom: 16px;
      a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 568px;
        height: 320px;
        background: url(https://mysource-hexo.wyun521.top/img/avatar/2.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        transition: all .35s ease-in-out;   
        
        .photo-cate {
          color: var(--evan-white-color);
          font-size: 0;
          padding-bottom: 8px;
          transition: all .35s ease-in-out; 
        }

        .photo-cate-desc {
          color: var(--evan-black-color);
          font-size: 0;
          transition: all .35s ease-in-out; 
        }

        // &::before {
        //   content: '';
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background-color: var(--evan-card-backup-color);
        //   border-radius: 10px;
        // }

        // &:hover::before {
        //   display: none;
        // }

        &:hover {
          .photo-cate {
            font-size: 36px;
          }
          .photo-cate-desc {
            font-size: 24px;
          }
        }


      }   
    }
  }
}
</style>