<!-- Home页面展示的列表 -->
<template>
  <keep-alive>
    <div class="good">
        <header class="good-header">{{nameInfo}}</header>
        <van-skeleton title :row="3" :loading="loading">
            <div class="good-box">
              
                <div class="good-item" v-for="item in Goods" :key="item.goodsId" @click="EnterDetail(item.goodsId)">
                    <img :src="item.goodsCoverImg" alt=""  >
                    <div class="good-desc">
                        <div class="title">{{ item.goodsName }}</div>
                        <div class="price">¥ {{ item.sellingPrice }}</div>
                    </div>
                 
                </div>
            </div>
        </van-skeleton>
    </div>
  </keep-alive>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()

let props = defineProps<{
    loading: boolean,
    Goods:Array<GoodsType>,
    nameInfo?:string
}>()

const EnterDetail=(goodsId:number)=>{
  router.push(
    {
      name:'product',
      params:{
        id:goodsId
      }
    }
  )
}
</script>
<style lang="less" scoped>
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color:  #1baeae;
      font-size: 16px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        width: 50%;
        border-bottom: 1PX solid #e9e9e9;
        padding: 10px 10px;
        img {
          display: block;
          width: 120px;
          height: 126px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          .title {
            color: #222333;
          }
          .price {
            color: #1baeae;
          }
        }
        &:nth-child(2n + 1) {
          border-right: 1PX solid #e9e9e9;
        }
      }
    }
  }
</style>
