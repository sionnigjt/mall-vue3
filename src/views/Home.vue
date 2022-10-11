<template>
  <div class="Home">
    <Swiper :list="swiperList"></Swiper>
    12
  </div>
  <NavBar></NavBar>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref,onMounted } from 'vue'
import NavBar from '../components/Navbar.vue'
import Swiper from "../components/Swiper.vue";
import { getHome } from '../server/Home'

type carousels =
  {
    carouselUrl: string,
    redirectUrl: string
  }
  let swiperList = ref<Array<carousels>>([{
    //默认图片
    carouselUrl: '1',
    redirectUrl: '2'
  }]);

onMounted(async () => {
      const { data } = await getHome()
      swiperList.value = data.carousels
    //  console.log(swiperList);
    })
</script>
<style lang="less" scoped>

</style>
