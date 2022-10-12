<template>
  <div class="Home">
    <header class="home-header wrap" :class="{'active' :HomeSate.headerScroll}">
      <router-link tag="i" to="./category">
        <van-icon name="wap-nav" />
      </router-link>
      <div class="header-search">
        <span class="app-name">商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!HomeSate.isLogin">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>
    <Swiper :list="HomeSate.swiperList"></Swiper>
    <div class="category-list">
      <div v-for="item in HomeSate.categoryList" v-bind:key="item.categoryId" @click="tips">
        <img :src="item.imgUrl">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
  <GoodsList :loading="HomeSate.loading" :Goods="HomeSate.newGoodses" :nameInfo="`最新商品`"></GoodsList>
  <GoodsList :loading="HomeSate.loading" :Goods="HomeSate.hotGoodses" :nameInfo="`热门商品`"></GoodsList>
  <NavBar></NavBar>
</template>
<script lang="ts" setup>
import { Toast } from 'vant';
import { reactive, onBeforeMount } from 'vue'
import NavBar from '../components/Navbar.vue'
import Swiper from "../components/Swiper.vue";
import GoodsList from "../components/GoodsList.vue"
import { getHome } from '../server/Home'
import { categoryListData, swiperListData } from '../stores/data'
type carousels = {
  carouselUrl: string,
  redirectUrl: string
}
type categoryListType = {
  name: string,
  imgUrl: string,
  categoryId: number
}
type GoodsType = {
  goodsId: number,
  goodsName: string,
  goodsIntro: string,
  goodsCoverImg: string,
  sellingPrice: number,
  tag: string
}
type HomeSateType = {
  swiperList: Array<carousels>,
  headerScroll: boolean,
  isLogin: boolean,
  categoryList: Array<categoryListType>,
  loading: boolean,
  newGoodses: Array<GoodsType>,
  hotGoodses: Array<GoodsType>
}

let HomeSate = reactive<HomeSateType>({
  swiperList: swiperListData,
  //透明情况
  headerScroll: false,
  //是否登录
  isLogin: false,
  categoryList: categoryListData,
  loading:true,
  newGoodses: [<GoodsType>{}],
  hotGoodses: [<GoodsType>{}]
})
//通过生命周期函数请求数据
onBeforeMount(async () => {
  const { data } = await getHome()
  HomeSate.swiperList = data.carousels
  //  console.log(swiperList);
  HomeSate.hotGoodses=data.hotGoodses
  HomeSate.newGoodses=data.newGoodses
  HomeSate.loading=false
})
const tips = () => {
  Toast('敬请期待');
}

</script>
<style lang="less" scoped>
.home-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  color: #fff;
  z-index: 10000;
  display: flex;
  justify-content: space-between;

  .nbmenu2 {
    color: #1baeae;
  }

  &.active {
    background: #1baeae;

    .nbmenu2 {
      color: #fff;
    }

    .login {
      color: #fff;
    }
  }

  .header-search {
    display: flex;
    line-height: 20px;
    margin: 10px 0;
    padding: 5px 10px 5px 0;
    color: #232326;
    background: rgba(255, 255, 255, .7);
    border-radius: 20px;

    .app-name {
      padding: 0 10px;
      color: #1baeae;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #1baeae;
    }

    .icon-search {
      padding: 0 5px;
      font-size: 17px;
    }

    .search-title {
      font-size: 12px;
      color: #5e7676;
      line-height: 21px;
    }
  }

  .icon-iconyonghu {
    color: #fff;
    font-size: 22px;
  }

  .login {
    color: #1baeae;
    line-height: 52px;

    .van-icon-manager-o {
      font-size: 20px;
      vertical-align: -3px;
    }
  }
}

.category-list {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;

  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;

    img {
      width: 36px;
      height: 36px;
      margin: 13px auto 8px auto;
    }

    span {
      font-size: small;
    }
  }
}
</style>
