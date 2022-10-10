<template>
    <div class="Navbar">
        <ul class="nav-list">
            <router-link class="nav-list-item " to="home">
                <i class="nbicon"></i>
                <span>首页</span>
            </router-link>
            <router-link class="nav-list-item" to="category">
                <i class="nbicon "></i>
                <span>分类</span>
            </router-link>
            <router-link class="nav-list-item" to="cart">
                <van-icon  name="shopping-cart-o" :badge="!count ? '' : count" />
                <span>购物车</span>
            </router-link>
            <router-link class="nav-list-item" to="user">
                <i class="nbicon "></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import {useCounterStore} from '../stores/counter'
const route = useRoute()
const state = useCounterStore()
onMounted(() => {
    const token = localStorage.getItem('token')
    const path = route.path
    if (token && !['/home', '/category'].includes(path)) {
        state.UpdateCartCount()
    }
})
const count = computed(() => {
    return state.CartCount
})
</script>
<style lang="less" scoped>
.Navbar{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 0;
      z-index: 1000;
      background: #fff;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      .nav-list{
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: space-around;
        .nav-list-item {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #666;}
      }
    }
</style>
