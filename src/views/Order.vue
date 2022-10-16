<template>
    <div class="Order">
        <SlotHeader>
        </SlotHeader>
        <van-tabs :swipeable="true" :duration="0.3" @click="onChangeTab" :color="'#1baeae'"
            :title-active-color="'#1baeae'" class="order-tab">
            <van-tab title="全部" name=''>
                <OrderList :list="OrderState.list"></OrderList>
            </van-tab>
            <van-tab title="待付款" name="0">2</van-tab>
            <van-tab title="待确认" name="1">3</van-tab>
            <van-tab title="待发货" name="2">4</van-tab>
            <van-tab title="已发货" name="3">2</van-tab>
            <van-tab title="交易完成" name="4">4</van-tab>
        </van-tabs>
    </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import SlotHeader from '../components/SlotHeader.vue'
import OrderList from '../components/OrderList.vue'
const OrderState = reactive({
    list:[<OrderListType>{}],
    status: ''
})
OrderState.list=   [{
            orderId: 21526,
            orderNo: "16659202004377776",
            totalPrice: 18999,
            payType: 1,
            orderStatus: 1,
            orderStatusString: "已支付",
            createTime: "2022-10-16 19:36:40",
            newBeeMallOrderItemVOS: [
                {
                    orderId:0,
                    goodsId: 10920,
                    goodsCount: 1,
                    goodsName: "MacBook Pro 16英寸 M1 Pro芯片",
                    goodsCoverImg: "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mbp16-silver-select-202110_GEO_CN.jpeg",
                    sellingPrice: 18999
                }
            ]
        }]
const onChangeTab = () => {

}
</script>
<style lang="less" scoped>
.Order {
    width: 100vw;
    height: 100vh;

    .order-tab {
        position: fixed;
        left: 0;
        z-index: 1000;
        width: 100vw;
        border-bottom: 1px solid #e9e9e9;

    }
}
</style>
