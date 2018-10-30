<template>
  <div class="wrapper">
      <router-view></router-view>

      <footer class="wrapper-footer">
        <router-link to="/index/home">
          <span>首页</span>
        </router-link>
        <router-link to="/index/follow">
          <span>关注</span>
        </router-link>
        <router-link to="/index/plus">
          <span class="icon"><i class="iconfont icon-jia"></i></span>
        </router-link>
        <router-link to="/index/news">
          <span>消息</span>
        </router-link>
        <router-link to="/index/my">
          <span>我</span>
        </router-link>
      </footer>
  </div>
  
</template>

<script>
export default {
  name: '',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  border-bottom: 2px solid #fff;
}
.icon i{
  background: #fff;
  color: #ccc;
  display: block;
}

</style>
