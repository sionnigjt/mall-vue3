<template>
    <div class="Order">
        <SlotHeader>
        </SlotHeader>
        <van-tabs :swipeable="true" :duration="0.3" @click="onChangeTab" :color="'#1baeae'"
            :title-active-color="'#1baeae'" class="order-tab">
            <div v-for="item,id in OrderState.tabValue ">
                <van-tab :title="item.title" :name='id'>
                    <OrderList :list="OrderState.list[id]"></OrderList>
                </van-tab>
            </div>
        </van-tabs>
    </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onActivated } from 'vue'
import SlotHeader from '../components/SlotHeader.vue'
import OrderList from '../components/OrderList.vue'
import { OrderTabData } from '../stores/data'
import { getOrderList } from '../server/Oder'
type OrderStateListType = Array<OrderListArrayType> 
const OrderState = reactive({
    list:<OrderStateListType>[],
    status: '',
    tabValue: OrderTabData
})
const onChangeTab = () => {

}
onActivated(async () => {
    console.log(11244);
    for (let index = 0; index < OrderState.tabValue.length; index++) {
        let { data } = await getOrderList({
            pageNumber: 1,
            status: OrderState.tabValue[index].name
        })
        if (data.list.length > 0) {
            OrderState.list[index] = data.list
        }
    }
})
</script>
<style lang="less" scoped>
.Order {
    width: 100vw;
    height: 100vh;

  

}
</style>
