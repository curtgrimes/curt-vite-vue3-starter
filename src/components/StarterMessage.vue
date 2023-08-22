<script setup lang="ts">
import { ref } from "vue";

defineProps<{ message: string }>();

const count = ref(0);
</script>

<template>
  <div
    class="bg-gray-200 max-w-xl mx-auto mt-12 p-5 rounded text-center flex gap-4 flex-col"
  >
    <h1 class="text-xl">Curt's Vite + Vue3 Starter</h1>
    <p>{{ message }}</p>

    <p class="flex gap-2 justify-center flex-col md:flex-row">
      <StarterMessageLink
        url="https://github.com/curtgrimes/curt-vite-vue3-starter"
        text="GitHub"
        icon="github"
      />
      <StarterMessageLink
        url="https://stackblitz.com/github/curtgrimes/curt-vite-vue3-starter"
        text="Start new Stackblitz"
        icon="stackblitz"
      />
      <StarterMessageLink
        @click="count++"
        :text="`Test reactivity: ${count}`"
      />
    </p>
  </div>
</template>
