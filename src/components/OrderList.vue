<template>
  <div class="OrderList">
      <van-list finished-text="没有更多了" :finished="finished">
        <div v-for="(item, index) in list" :key="index" class="order-item-box" @click="goTo(item.orderId)">
          <div class="order-item-header">
            <span>订单时间：{{ item.createTime }}</span>
            <span>{{ item.orderStatusString }}</span>
          </div>
          <van-card v-for="one in item.newBeeMallOrderItemVOS" :key="one.orderId" :num="one.goodsCount"
            :price="one.sellingPrice" desc="全场包邮" :title="one.goodsName" :thumb="one.goodsCoverImg" />
        </div>
      </van-list>


  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router';

const router=useRouter()
const props = defineProps<{
  list?: OrderListArrayType,

}>()
let finished=ref(false)
finished.value=props.list?false:true
const goTo=(id:number)=>[
router.push("/product/"+id)
]
</script>
<style lang="less" scoped>

   .OrderList{
      .van-card__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .van-pull-refresh__head {
        background: #f9f9f9;
      }
      .order-item-box {
        margin: 20px 10px;
        background-color: #fff;
        .order-item-header {
          padding: 10px 20px 0 20px;
          display: flex;
          justify-content: space-between;
        }
        .van-card {
          background-color: #fff;
          margin-top: 0;
        }
      }
    }
</style>
