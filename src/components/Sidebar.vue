<template>
  <ul
    class="flex flex-col gap-y-5 font-semibold text-xs md:text-base text-brand-dark dark:text-brand-light tracking-wider"
  >
    <li class="flex items-center gap-x-3 hover:translate-x-2 transition hover:transition">
      <button class="cursor-pointer text-left" @click="navigateTo('/')">Home</button>
      <span
        v-if="isActive('/')"
        class="w-2 h-2 rounded-full bg-brand-dark dark:bg-brand-light"
      ></span>
    </li>

    <li class="flex items-center gap-x-3 hover:translate-x-2 transition hover:transition">
      <button class="cursor-pointer text-left" @click="navigateTo('/about')">
        Behind the Codes
      </button>
      <span
        v-if="isActive('/about')"
        class="w-2 h-2 rounded-full bg-brand-dark dark:bg-brand-light"
      ></span>
    </li>

    <li class="flex items-center gap-x-3 hover:translate-x-2 transition hover:transition">
      <button class="cursor-pointer text-left" @click="navigateTo('/projects')">Projects</button>
      <span
        v-if="isActive('/projects')"
        class="w-2 h-2 rounded-full bg-brand-dark dark:bg-brand-light"
      ></span>
    </li>

    <li class="flex items-center gap-x-3 hover:translate-x-2 transition hover:transition">
      <button class="cursor-pointer text-left" @click="navigateTo('/contact')">Contact</button>
      <span
        v-if="isActive('/contact')"
        class="w-2 h-2 rounded-full bg-brand-dark dark:bg-brand-light"
      ></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

const navigateTo = (path: string) => {
  router.push(path)
}

const isActive = (path: string) => route.path === path
</script>
