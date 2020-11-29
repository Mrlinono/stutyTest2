<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>

    <van-tabbar route active-color="#4a488e" inactive-color="#000" v-if="!$route.meta.showNav">
      <van-tabbar-item replace to="/Home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/List" icon="shop">分类</van-tabbar-item>
      <van-tabbar-item replace to="/Carts" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/Me" icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 50px;
}
#app {
  display: flex;
  flex-direction: column;
}
#app .content {
  flex: 1;
  overflow: auto;
}

#app .van-nav-bar__title {
  color: #4a488e;
  font-weight: 600;
}
</style>
