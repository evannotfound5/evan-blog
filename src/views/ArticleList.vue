<template>
  <h3 class="header-title">文章列表</h3>
  <div class="post-box">
    <div class="post-list">
      <router-link :to="`/article/${index+1}`" v-for="(item,index) in 8" :key="index">
        <div class="post-item">
          <h4 class="title">Vim入门指南</h4>
          <div class="desc">Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</div>
          <div class="post-info">
            <div class="info">
              <span class="date">2024-01-05</span>
              <span class="cate">前端</span>
            </div>
            <div class="readAll">阅读全文>></div>
          </div>
        </div>
      </router-link>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside  from '../layout/Aside.vue'
</script>

<style lang="scss" scoped>

.post-box { 
  display: flex;
  padding: 0 24px 48px;
  .post-list {
    flex: 1;
    margin-right: 64px;
    .post-item {
      padding: 28px 28px 18px;
      margin-bottom: 20px;
      background-color: var(--main-card-bg-color)66;
      backdrop-filter: blur(20px);
      border: 1px solid #292929;
      border-radius: 8px;
      transition: all .35s;

      &:hover {
        box-shadow: var(--main-card-hover-box-shadow);
        .title {
          color: #ccc;
        }
      }
      .title {
        font-size: 20px;
        margin-bottom: 8px;
      }

      .desc {
        margin-bottom: 12px;
        // 多行文本溢出隐藏显示省略号
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .post-info {
        display: flex;
        justify-content: space-between;
        .info {
          display: flex;
          span {
            margin-right: 16px;
          }
        }
      }
    }
  }
  .post-aside {
    width: 20%;
  }
}

@media screen and (max-width: 666px) {
  .header-title {
    display: none;
  }
  .post-box {
    margin-top: 20px;
  }
  
}

@media screen and (max-width: 1560px) {
  .post-box {
    .post-list {
      margin-right: 0;
    }
  }
}
</style>