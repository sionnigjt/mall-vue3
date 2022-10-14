<template>
    <div class="Cart">
        <SlotHeader>
            <template v-slot:main>
                <div>购物车</div>
            </template>
        </SlotHeader>
        <div class="cart-body">
            <van-checkbox-group @change="" ref="checkboxGroup">
                <van-swipe-cell :right-width="50" v-for="(item, index) in CartSate.list" :key="index">
                    <div class="good-item">
                        <van-checkbox :name="item.cartItemId" />
                        <div class="good-img"><img :src="item.goodsCoverImg" alt=""></div>
                        <div class="good-desc">
                            <div class="good-title">
                                <span>{{ item.goodsName }}</span>
                                <span>x{{ item.goodsCount }}</span>
                            </div>
                            <div class="good-btn">
                                <div class="price">¥{{ item.sellingPrice }}</div>
                                <van-stepper integer :min="1" :max="5" :model-value="item.goodsCount"
                                    :name="item.cartItemId" async-change @change="onChange" />
                            </div>
                        </div>
                    </div>
                    <template #right>
                        <van-button square icon="delete" type="danger" class="delete-button" @click="" />
                    </template>
                </van-swipe-cell>
            </van-checkbox-group>
        </div>
        <van-submit-bar class="submit-all" :price="12 * 100" button-text="结算" @submit="onSubmit">
            <van-checkbox @click="allCheck" v-model:checked="checkAll">全选</van-checkbox>
        </van-submit-bar>
        <NavBar></NavBar>
    </div>
</template>
<script lang="ts" setup>
import { Card } from 'vant';
import { reactive, watch, computed, ref } from 'vue'
import NavBar from '../components/Navbar.vue'
import SlotHeader from '../components/SlotHeader.vue'
const CartSate = reactive({
    list: [<CartListType>{}]
})
const onChange = () => {

}
const onSubmit = () => {

}
const allCheck = () => {

}
const checkAll = () => {

}
</script>
<style lang="less" scoped>
.cart-body {
    margin: 16px 0 100px 0;
    padding-left: 10px;

    .good-item {
        display: flex;

        .good-img {
            img {
                width: 100%;
                height: 100%;
            }
        }

        .good-desc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding: 20px;

            .good-title {
                display: flex;
                justify-content: space-between;
            }

            .good-btn {
                display: flex;
                justify-content: space-between;

                .price {
                    font-size: 16px;
                    color: red;
                    line-height: 28px;
                }

                .van-icon-delete {
                    font-size: 20px;
                    margin-top: 4px;
                }
            }
        }
    }

    .delete-button {
        width: 50px;
        height: 100%;
    }
}

.submit-all {
    margin-bottom: 50px;

    .van-checkbox {
        margin-left: 10px
    }

    .van-submit-bar__text {
        margin-right: 10px
    }

    .van-submit-bar__button {
        background: #1baeae;
    }
}
</style>
