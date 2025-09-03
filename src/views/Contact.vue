<template>
  <div class="flex flex-col min-h-[100%] font-medium">
    <div
      class="self-end max-w-full mt-auto mb-[80px] md:mb-0 text-sm md:text-base text-right md:text-left text-brand-dark dark:text-brand-light"
    >
      <div class="text-xs md:text-lg flex flex-col gap-3 text-brand-dark dark:text-brand-light">
        <div class="flex items-center gap-x-2">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <p>yudhapapua15@gmail.com</p>
        </div>
        <div class="flex items-center gap-x-2">
          <font-awesome-icon icon="fa-brands fa-square-linkedin" />
          <a href="https://www.linkedin.com/in/yudhastyoo" target="_blank" class="underline">
            LinkedIn
          </a>
        </div>
        <div class="flex items-center gap-x-2">
          <font-awesome-icon icon="fa-brands fa-square-github" />
          <a href="https://github.com/yudhastyoo" target="_blank" class="underline">GitHub</a>
        </div>
        <div class="flex items-center gap-x-2">
          <font-awesome-icon icon="fa-brands fa-square-instagram" />
          <a href="https://www.instagram.com/yudhastyoo/" target="_blank" class="underline">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
