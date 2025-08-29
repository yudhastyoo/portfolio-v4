<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <h1 class="text-3xl font-bold text-brand-dark dark:text-brand-light">
        <span class="text-blue-600 dark:text-brand-light">Yudha Papua</span> Setyo Atmaji
      </h1>
      <p class="text-base text-brand-dark dark:text-brand-light">Frontend Web Developer</p>
    </div>

    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-white' : 'bg-black'"
      class="relative self-start inline-flex h-[28px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-6 translate-y-0.5' : 'translate-x-0.5 translate-y-0.5'"
        class="pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-blue-600 shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)

// saat pertama kali load, cek localStorage
onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark') {
    enabled.value = true
    document.documentElement.classList.add('dark')
  } else {
    enabled.value = false
    document.documentElement.classList.remove('dark')
  }
})

// pantau perubahan nilai switch
watch(enabled, (value) => {
  if (value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})
</script>
