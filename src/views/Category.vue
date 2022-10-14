<template>
  <div class="Category">
    <SlotHeader>
      <template v-slot:main>
        <div>
          分类
        </div>
      </template>
    </SlotHeader>
    <NavBar></NavBar>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import NavBar from '../components/Navbar.vue'
import SlotHeader from '../components/SlotHeader.vue'
</script>
<style lang="less" scoped>

</style>
