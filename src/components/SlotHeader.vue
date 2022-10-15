<template>
  <div class="SlotHeader">
    <i class="iconfont  icon-back" @click="goBack"></i>
    <div class="slotMain">
      <slot name="main"></slot>
    </div>
    <i class="iconfont  icon-checkmore"></i>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router';
let router=useRouter()
const goBack=()=>{
  router.back()
}
</script>
<style lang="less" scoped>
&:deep(.icon-checkmore:before) {
  font-size:30px;
  color: rgb(79, 81, 78);
}

.SlotHeader {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  line-height: 50px;
  padding: 0 15px;
  // background-color: aquamarine;
  .slotMain{
    color: rgb(49, 59, 59);
  }

}
</style>
