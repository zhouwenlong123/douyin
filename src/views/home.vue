<template>
    <div class="home-wrapper">
        <header class="wrapper-header">
         <div><i class="iconfont icon-sousuo1"></i></div> 
         <div class="wrapper-header-text">
            <router-link to="/index/home/Recommend"><span>推荐</span></router-link>
            <router-link to="/index/home/City"><span>北京</span></router-link>
         </div>
         <div><i class="iconfont icon-gengduo"></i></div>
      </header>

      <section class="wrapper-section">
          <router-view></router-view>
      </section>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.router-link-active{
 color: red;
}
</style>

