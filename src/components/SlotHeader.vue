<template>
  <div class="SlotHeader">
    <div class="SlotHeaderFix">
      <i class="iconfont  icon-back" @click="goBack"></i>
      <div class="slotMain">
        <slot name="main"></slot>
      </div>
      <i class="iconfont  icon-checkmore"></i>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
const goBack = () => {
  router.back()
}
</script>
<style lang="less" scoped>
&:deep(.icon-checkmore:before) {
  font-size: 30px;
  color: rgb(79, 81, 78);
}

.SlotHeader {
  width: 100vw;
  height: 65px;

}

.SlotHeaderFix {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  background-color: rgb(255, 255, 255);
  width: 100vw;
  line-height: 50px;
  position: fixed;
  left: 0;

  .slotMain {
    color: rgb(49, 59, 59);
  }

}
</style>
