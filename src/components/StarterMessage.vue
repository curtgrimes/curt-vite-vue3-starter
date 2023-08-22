<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ message: string }>();

const count = ref(0);
</script>

<template>
  <div
    class="mx-auto mt-12 flex max-w-xl flex-col gap-4 rounded bg-gray-200 p-5 text-center"
  >
    <h1 class="text-xl">
      Curt's Vite + Vue3 Starter
    </h1>
    <p>{{ message }}</p>

    <p class="flex flex-col flex-wrap justify-center gap-2 md:flex-row">
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
        :text="`Test reactivity: ${count}`"
        @click="count++"
      />
      <StarterMessageLink
        text="Test routing"
        @click="$router.push('/page-two')"
      />
    </p>
  </div>
</template>
