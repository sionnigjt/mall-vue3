<template>
    <div class="CreateOrder">
        123
    </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onActivated } from 'vue'
import { useRoute } from 'vue-router';
import { saveOrder } from '../server/Oder'
const route = useRoute()
onActivated(async () => {
    let params = {
        addressId: 12586,
        cartItemIds: route.query.cartItemIds as unknown as Array<number>
    }
    let { data } = await saveOrder(params)
})
</script>
<style lang="less" scoped>

</style>
