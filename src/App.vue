
<template>
    <router-view class="router-view" v-slot="{ Component }">
        <transition :name="state.transitionName">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
    transitionName: 'fade'
})
</script>
<style scoped>

</style>
