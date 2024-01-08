
<template>
  <h3 class="header-title">照片墙</h3>
  <div class="photo-box">
    <div class="photo-content">
      <div v-for="item in photoCates" :key="item.id" class="link-item">
        <router-link :to="`/photosItem/${item.id}`" :style="{ backgroundImage: `url(${item.imgUrl})` }">
          <h4 class="photo-cate">{{'<' + item.title + '>'}}</h4>
          <div class="photo-cate-desc">{{item.desc}}</div>
        </router-link>
      </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Aside from '../layout/Aside.vue'


const photoCates = ref([
  { id: 1001, title: '日常', desc: '记录日常生活的点滴', imgUrl: 'https://mysource-hexo.wyun521.top/img/avatar/5.jpg' },
  { id: 1002, title: '穷游', desc: '记录旅途中的美好时刻', imgUrl: 'https://mysource-hexo.wyun521.top/img/avatar/1.jpg' },
  { id: 1003, title: '美图', desc: '收集的一些好看的图片', imgUrl: 'https://mysource-hexo.wyun521.top/img/avatar/7.jpg' },
])

</script>
<style lang="scss" scoped>

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
        background-repeat: no-repeat;
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
          color: var(--evan-white-color);
          font-size: 0;
          transition: all .35s ease-in-out; 
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          z-index: 666;
          width: 100%;
          height: 100%;
          background-color: var(--evan-card-backup-color);
          border-radius: 10px;
          transition: all .35s ease-in-out; 
          opacity: 0;
        }

        &:hover::before {
          opacity: 1;
        }

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