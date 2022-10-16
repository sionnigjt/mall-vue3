
<template>
   <router-view v-slot="{ Component, route }">
    <transition name="fade" >
      <component :is="Component" v-if="route.meta.noKeepAlive" />
      <keep-alive v-else>
        <component :is="Component"  />
      </keep-alive>
  
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
