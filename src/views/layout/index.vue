<template>
    <div>
       <!-- 二级路由出口 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <van-tabbar route active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/category" icon="apps-o">分类页</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style>

</style>
