<template>
  <div id="sidebar">
      <div class="sidebar-center">
        <div class="profile">
          <div class="avatar">
            <img src="../assets/img/avatar.jpg" alt="头像">
          </div>
          <h2 class="nickname">evannotfound5</h2>
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
        <router-link to="/edit" title="写文章"><i class="iconfont icon-bi"></i></router-link>
        <router-link to="/postimg" title="上传图片"><i class="iconfont icon-shangchuan"></i></router-link>
        <router-link to="/dashboard" title="后台"><i class="iconfont icon-suo"></i></router-link>
        <router-link to="/about" title="关于"><i class="iconfont icon-tixing"></i></router-link>
        <router-link to="/share" title="分享"><i class="iconfont icon-fenxiang"></i></router-link>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

#sidebar {
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
    color:#ccc;
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
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
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