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
import { OderTabData } from '../stores/data'
import { getOrderList } from '../server/Oder'
const OrderState = reactive({
    list: [[<OrderListType>{}]],
    status: '',
    tabValue: OderTabData
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
        OrderState.list[index]=data?.list
    }

})
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
