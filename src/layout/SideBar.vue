<template>
  <div id="sidebar">
      <div class="sidebar-center">
        <div class="profile">
          <div class="avatar">
            <img src="../assets/img/avatar.jpg" alt="头像">
          </div>
          <h2 class="nickname">EvanNotFound5</h2>
          <div class="desc">生活不止眼前的苟且，还有诗和远方</div>
        </div>
        <ul class="nav">
          <li class="nav-item"><router-link to="/">文章</router-link></li>
          <li class="nav-item"><router-link to="/photos">相册</router-link></li>
          <li class="nav-item"><router-link to="/shuoshuo">说说</router-link></li>
          <li class="nav-item"><router-link to="/links">友链</router-link></li>
          <li class="nav-item"><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
      <div class="sidebar-bottom">
        <a href="#" title="亮暗切换"><i class="iconfont icon-liangdu"></i></a>
        <a href="https://github.com/evannotfound5" target="_blank" title="GitHub"><i class="iconfont icon-github"></i></a>
        <a href="https://juejin.cn/user/981236373005534" target="_blank" title="掘金"><i class="iconfont icon-juejin"></i></a>
        <a href="mailto:3032317941@qq.com" title="邮箱"><i class="iconfont icon-youxiang"></i></a>
        <a href="#" title="控制面板"><i class="iconfont icon-kaiguan"></i></a>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

#sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 298px;
  height: 100%;
  background-color: #1e1e1e;
  color: #868686;
  border-right: 1px solid #292929;
}

@media screen and (max-width: 1200px) {
  #sidebar {
    width: 276px;
  }
}

@media screen and (max-width: 666px) {
  #sidebar {
    display: none;
  }
}

.sidebar-center {
  margin-top: 99px;
  margin-bottom: 136px;
}

.profile {
  text-align: center;
  .avatar {
    img {
      width: 112px;
      height: 112px;
      border: 2px solid #ccc;
      border-radius: 50%;
      transition: transform 1.5s;
    }
    img:hover {
      transform: rotate(720deg);
    }
  }
  .nickname {
    padding: 12px 0;
  }
  .nickname:hover {
    color: var(--evan-header-text-color);
  }
  .desc {
    font-size: 14px;
  }
}

.nav {
  margin-top: 42px;
  padding: 0 24px;
  .nav-item {
    a {
      display: block;
      padding: 12px 26px;
      margin-bottom: 6px;
      border-radius: 8px;
      transition: background-color .5s;
    }
    a:hover {
      background-color: #262626;
    }
    .router-link-active {
      color: #eee;
      background-color: #262626;
    }
  }
}

.sidebar-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;

  a {
    display: block;
    margin: 0 6px;
    width: 36px;
    height: 36px;
    background-color: #232328;
    line-height: 36px;
    text-align: center;
    border-radius: 50%;
    
  }
  .iconfont::before {
    font-size: 20px;
  }
  .iconfont:hover::before {
    color: #eee;
  }
}
</style>