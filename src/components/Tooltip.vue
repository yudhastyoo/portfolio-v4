<template>
  <div class="tooltip-wrapper" @mouseenter="show = true" @mouseleave="show = false">
    <slot></slot>
    <!-- Elemen yang di-hover -->
    <div
      v-if="show"
      class="tooltip-content text-brand-light dark:text-brand-dark bg-brand-dark dark:bg-brand-light"
      :class="position"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  position: { type: String, default: 'top' }, // top, bottom, left, right
})

const show = ref(false)
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip-content {
  position: absolute;
  /* background-color: #333;
  color: #fff; */
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 14px;
  z-index: 100;
  transition: opacity 0.2s ease;
  opacity: 0.9;
}

/* Tooltip position */
.tooltip-content.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.tooltip-content.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
}

.tooltip-content.left {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  margin-right: 8px;
}

.tooltip-content.right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 8px;
}
</style>
