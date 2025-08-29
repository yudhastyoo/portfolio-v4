<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const showSplash = ref(false)

onMounted(() => {
  // Hilang setelah 2 detik
  setTimeout(() => {
    showSplash.value = false
  }, 2000)
})
</script>

<template>
  <div
    class="w-full fixed inset-0 bg-white dark:bg-brand-dark bg-grid-light dark:bg-grid-dark bg-grid transition-colors duration-500"
  >
    <transition name="fade">
      <div
        v-if="showSplash"
        class="fixed inset-0 flex items-center justify-center bg-white dark:bg-brand-dark z-50"
      >
        <h1 class="text-4xl font-bold text-blue-600 dark:text-white animate-pulse">Loading...</h1>
      </div>
    </transition>

    <div v-if="!showSplash" class="p-5 md:p-12 h-screen flex flex-col">
      <Navbar />
      <div class="grid grid-cols-2 pt-10 flex-1 overflow-hidden">
        <Sidebar />

        <div class="overflow-y-auto">
          <router-view />
        </div>
      </div>
      <p class="absolute bottom-1 text-[8px] text-brand-dark dark:text-brand-light">
        &#169; Yudha Papua Setyo Atmaji
      </p>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
