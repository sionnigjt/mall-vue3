<template>
    <div class="Cart">
        <SlotHeader>
            <template v-slot:main>
                <div>购物车</div>
            </template>
        </SlotHeader>
        <div class="cart-body" v-if="isShow()">
            <van-checkbox-group @change="watchChange" v-model="CartSate.result" ref="checkboxGroup">
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
                                <van-stepper integer :min=0 :max=10 v-model.number="item.goodsCount"
                                    :name="item.cartItemId" @change="onChange" />
                            </div>
                        </div>
                    </div>
                    <template #right>
                        <van-button square icon="delete" type="danger" class="delete-button"
                            @click="deleteGood(item.cartItemId)" />
                    </template>
                </van-swipe-cell>
            </van-checkbox-group>
        </div>
        <div class="empty" v-if="!isShow()">
            <img class="empty-cart" src="https://s.yezgea02.com/1604028375097/empty-car.png" alt="空购物车">
            <div class="title">购物车空空如也</div>
            <van-button round color="#1baeae" type="primary" @click="goTo" block>前往选购</van-button>
        </div>
        <van-submit-bar class="submit-all" :price="total * 100" button-text="结算" @submit="onSubmit">
            <van-checkbox @click="allCheck" v-model:checked="CartSate.checkAll">全选</van-checkbox>
        </van-submit-bar>
        <NavBar></NavBar>
    </div>
</template>
<script lang="ts" setup>
import { Card } from 'vant'
import { reactive, watch, computed, ref, onMounted, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/Navbar.vue'
import SlotHeader from '../components/SlotHeader.vue'
import { deleteCartItem, getCart, modifyCart } from '../server/Cart'
import { useCounterStore } from '../stores/counter'
const CartSate = reactive({
    list: [<CartListType>{}],
    checkAll: true,
    result: [0]
})

const router=useRouter()
const state = useCounterStore()
const total = computed(() => {
    let sum = 0
    let _list = CartSate.list.filter(item => CartSate.result.includes(item.cartItemId))
    _list.forEach(item => {
        sum += item.goodsCount * item.sellingPrice
    })
    return sum;
})
const watchChange = (result: Array<number>) => {
    if (result.length > 1 && result.length == CartSate.list.length) {
        CartSate.checkAll = true
    }
    if (result.length < CartSate.list.length) {
        console.log(222);
        CartSate.checkAll = false
    }
    CartSate.result = result
}
const deleteGood = async (id: number) => {
    state.UpdateCartCount()
    CartSate.result = CartSate.result.filter(item => item != id)
    CartSate.list = CartSate.list.filter(item => item.cartItemId != id)
    await deleteCartItem(id)

}
const onChange = async (count: number, id: { name: number }) => {
    console.log(count, id);
    //删除
    if (count == 0) {
        await deleteGood(id.name)

    }
    //超过最大限制
    else if (count > 10) {

    }
    else {
        for (const value of CartSate.list) {
            if (value.cartItemId == id.name) {
                value.goodsCount = count
                break
            }
        }
        await modifyCart({
            cartItemId: id.name,
            goodsCount: count
        })
    }
}
const onSubmit = () => {

}
const allCheck = () => {
    CartSate.checkAll = !CartSate.checkAll
    if (CartSate.checkAll) {
        CartSate.result = CartSate.list.map(item => item.cartItemId)
    }
    else {
        CartSate.result = []
    }
}

const isShow=()=>{
    if (CartSate.result[0]==0||CartSate.result.length==0) {
  
        return false
    }
   else return true
}
const goTo=()=>{
    router.push('/home')
}
onActivated(async () => {
    let { data } = await getCart();
    CartSate.list = data;
    CartSate.result = data.map(item => item.cartItemId)
})
</script>
<style lang="less" scoped>
.Cart {
    height: 100vh;
    width: 100vw;

    .cart-body {
        margin: 16px 0 100px 0;
        padding-left: 10px;

        .good-item {
            display: flex;

            .good-img {
                img {
                    width: 105px;
                    height: 105px;
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
    .empty {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      margin-top: 200px;
      .empty-cart {
        width: 150px;
        margin-bottom: 20px;
      }
      .van-icon-smile-o {
        font-size: 50px;
      }
      .title {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
}
</style>
