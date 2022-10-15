
<template>
   <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { RouterView, useRouter } from 'vue-router'

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
