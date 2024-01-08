<template>
  <div id="aside">
    <div class="section-one">
      <h4>Recently Updated</h4>
      <ul class="post-links">
        <li><a href="#">Vim入门指南</a></li>
        <li><a href="#">ArchLinux使用记录</a></li>
        <li><a href="#">LC189-轮转数组三种解法</a></li>
        <li><a href="#">博耶-摩尔多数投票算法</a></li>
        <li><a href="#">常用数据源数据库安装配置</a></li>
      </ul>
    </div>
    <div class="section-two">
      <h4>Trending Cates</h4>
      <div class="cate-btns">
        <a class="cate-btn" href="#">前端</a>
        <a class="cate-btn" href="#">后端</a>
        <a class="cate-btn" href="#">设计</a>
        <a class="cate-btn" href="#">测试</a>
        <a class="cate-btn" href="#">运维</a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#aside {
  width: 282px;
  padding-left: 20px;

  h4 {
    color: var(--evan-text-color);
    font-weight: 700;
    margin-bottom: 8px;
  }

  .section-one,
  .section-two {
    margin-bottom: 64px;
    padding-left: 16px;
    border-left: 1px solid var(--evan-card-borer-color);
  }
  .section-one {
    .post-links {
      li {
        line-height: 1.8;
        a:hover {
          color: var(--evan-card-text-color);
          border-bottom: 1px solid var(--evan-card-text-color);
        }
      }
    }
  }
  .section-two {
    .cate-btns {
      display: flex;
      flex-wrap: wrap;
      margin-top: 14px;
      a {
        display: block;
        padding: 5px 10px;
        margin-right: 12px;
        margin-bottom: 8px;
        border: 1px solid var(--evan-card-borer-color);
        border-radius: 20%;
        &:hover {
          color: #eee;
          background-color: #262626;;
        }
      }
    }
    
  }
}

@media screen and (max-width: 1200px) {
  #aside {
    display: none;
  }
}
</style>