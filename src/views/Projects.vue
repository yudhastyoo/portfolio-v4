<template>
  <div class="grid grid-cols-1 gap-y-8 text-right pr-5">
    <div
      class="flex flex-col cursor-pointer hover:-translate-x-2 transition hover:transition"
      v-for="project in projects"
      :key="project.id"
      @click="openModal(project)"
    >
      <h1 class="text-base md:text-3xl font-bold text-brand-dark dark:text-brand-light">
        {{ project.name }}
      </h1>
      <div class="mt-2 font-medium text-brand-dark dark:text-brand-light">
        <span class="text-blue-600 dark:text-red-400 text-sm">{{ project.year }}</span>
        /
        <span class="text-xs" v-for="(techItem, index) in project.tech" :key="index">
          {{ techItem }}<span v-if="index < project.tech.length - 1">, </span>
        </span>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:border dark:border-white dark:bg-brand-dark p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {{ selectedProject?.name }}
              </DialogTitle>

              <div v-if="selectedProject" class="space-y-4">
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  {{ selectedProject.description }}
                </p>

                <div
                  v-if="selectedProject.images && selectedProject.images.length"
                  class="grid gap-y-4 grid-cols-1"
                >
                  <!-- :class="[
                    'grid gap-4',
                    selectedProject.images.length === 1
                      ? 'grid-cols-1'
                      : 'grid-cols-1 ',
                  ]" -->
                  <img
                    v-for="(image, index) in selectedProject.images"
                    :key="index"
                    :src="image"
                    :alt="`Image ${index + 1} of ${selectedProject.name}`"
                    class="rounded shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div class="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Year:</strong> {{ selectedProject.year }}
                </div>

                <div class="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Tech Stack: </strong>
                  <span v-for="(techItem, index) in selectedProject.tech" :key="index">
                    {{ techItem }}<span v-if="index < selectedProject.tech.length - 1">, </span>
                  </span>
                </div>

                <div class="flex items-center justify-between gap-x-3">
                  <template v-if="selectedProject.onprem === true">
                    <Tooltip class="flex-1" text="On-prem Deployment" position="top">
                      <button
                        class="w-full cursor-default text-center flex-1 rounded-md border border-transparent bg-blue-100 dark:bg-blue-800 px-4 py-2 text-sm font-medium text-blue-900 dark:text-white focus:outline-none focus:border-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Internal-use Application
                      </button>
                    </Tooltip>
                  </template>
                  <a
                    v-else
                    :href="selectedProject.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-center flex-1 rounded-md border border-transparent bg-blue-100 dark:bg-blue-800 px-4 py-2 text-sm font-medium text-blue-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none focus:border-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Visit Project
                  </a>
                  <button
                    class="flex-1 rounded-md border border-blue-600 dark:border-white px-4 py-2 text-sm font-medium text-blue-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import projects from '@/data/projects'
import type { Project } from '@/data/projects'
import Tooltip from '@/components/Tooltip.vue'

const isOpen = ref(false)
const selectedProject = ref<Project | null>(null)

function openModal(project: Project) {
  selectedProject.value = project
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>
