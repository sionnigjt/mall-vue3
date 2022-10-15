<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae" :touchable="true">
        <van-swipe-item v-for="(item, index) in list" :key="index">
                <img  :src="item.carouselUrl" alt="" @click="goTo(item.redirectUrl)" >
        </van-swipe-item>
    </van-swipe>
</template>
  
<script lang="ts" setup>
type carousels =
    {
        carouselUrl: string,
        redirectUrl: string
    }
type listDate={
    list:Array<carousels>
}
const props = defineProps<listDate>()

const goTo=(url :string)=>{
    // window.open(url)
}
</script>
  
<style lang='less' scoped>
.my-swipe {
    img {
        width: 100%;
        height: 177px;
    }
}

</style>
  