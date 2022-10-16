<template>
  <div class="OrderList">
    <van-pull-refresh class="order-list-refresh">
      <van-list finished-text="没有更多了">
        <div v-for="(item, index) in list" :key="index" class="order-item-box" @click="goTo(item.orderNo)">
          <div class="order-item-header">
            <span>订单时间：{{ item.createTime }}</span>
            <span>{{ item.orderStatusString }}</span>
          </div>
          <van-card v-for="one in item.newBeeMallOrderItemVOS" :key="one.orderId" :num="one.goodsCount"
            :price="one.sellingPrice" desc="全场包邮" :title="one.goodsName" :thumb="one.goodsCoverImg" />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router';

const router=useRouter()
const props = defineProps<{
  list?: OrderListArrayType,

}>()
const goTo=(id:string)=>[
router.push("/product/"+id)
]
</script>
<style lang="less" scoped>
   .order-list-refresh {
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
