<template>
  <div class="ProductDetail">
    <!-- <s-header :name="'商品详情'"></s-header> -->
    <div class="detail-content">
      <div class="detail-swipe-wrap">
        <van-swipe class="my-swipe" indicator-color="#1baeae">
          <van-swipe-item v-for="(item, index) in DetailSate.detail.goodsCarouselList" :key="index">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="product-info">
        <div class="product-title">
          {{ DetailSate.detail.goodsName || '' }}
        </div>
        <div class="product-desc">免邮费 顺丰快递</div>
        <div class="product-price">
          <span>¥{{ DetailSate.detail.sellingPrice || '' }}</span>
        </div>
      </div>
      <div class="product-intro">
        <ul>
          <li>概述</li>
          <li>参数</li>
          <li>安装服务</li>
          <li>常见问题</li>
        </ul>
        <div class="product-content" v-html="DetailSate.detail.goodsDetailContent || ''"></div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="cart-o" :badge="!DetailSate.count ? '' : DetailSate.count" @click="goTo()"
        text="购物车" />
      <van-action-bar-button type="warning" @click="handleAddCart" text="加入购物车" />
      <van-action-bar-button type="danger" @click="goToCart" text="立即购买" />
    </van-action-bar>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onActivated } from 'vue'
import { useRoute } from 'vue-router';
import { getDetail } from '../server/Goods'
let route = useRoute()
let DetailSate = reactive({
  detail: <ProductDetailType>{},
  count: 0,
})
const handleAddCart = () => {

}
const goToCart = () => {

}
const goTo = () => {

}
onActivated(async () => {
  let {data} = await getDetail(Number(route.params.id))
  DetailSate.detail = data
})
</script>
<style lang="less" scoped>
.ProductDetail {
  .detail-content {
    height: calc(100vh - 50px);
    overflow: hidden;
    overflow-y: auto;

    .detail-swipe-wrap {
      .my-swipe .van-swipe-item {
        img {
          width: 100%;
          // height: 300px;
        }
      }
    }

    .product-info {
      padding: 0 10px;

      .product-title {
        font-size: 18px;
        text-align: left;
        color: #333;
      }

      .product-desc {
        font-size: 14px;
        text-align: left;
        color: #999;
        padding: 5px 0;
      }

      .product-price {

        span:nth-child(1) {
          color: #F63515;
          font-size: 22px;
        }

        span:nth-child(2) {
          color: #999;
          font-size: 16px;
        }
      }
    }

    .product-intro {
      width: 100%;
      padding-bottom: 50px;

      ul {
        width: 100%;
        margin: 10px 0;
        display: flex;
        justify-content: center;
        li {
          flex: 1;
          padding: 5px 0;
          text-align: center;
          font-size: 15px;
          border-right: 1px solid #999;
          box-sizing: border-box;

          &:last-child {
            border-right: none;
          }
        }
      }

      .product-content {
        padding: 0 20px;

        img {
          width: 100%;
        }
      }
    }
  }

  .van-action-bar-button--warning {
    background: linear-gradient(to right, #6bd8d8, #47f2f2)
  }

  .van-action-bar-button--danger {
    background: linear-gradient(to right, #0dc3c3, #098888)
  }
}
</style>
