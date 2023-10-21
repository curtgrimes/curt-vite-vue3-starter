<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ message: string }>();

const count = ref(0);
</script>

<template>
  <div
    class="mx-auto flex flex-col gap-4 text-center"
  >
    <img src="@/assets/vue.svg" class="w-8 mx-auto" />
    <h1 class="text-xl">
      Curt's Vite + Vue3 Starter
    </h1>
    <p>{{ message }}</p>

    <p class="flex flex-col flex-wrap justify-center gap-2 md:flex-row">
      <StarterMessageLink
        to="https://github.com/curtgrimes/curt-vite-vue3-starter"
        text="GitHub"
        icon="github"
      />
      <StarterMessageLink
        to="https://stackblitz.com/github/curtgrimes/curt-vite-vue3-starter"
        text="Start new Stackblitz"
        icon="stackblitz"
      />
      <StarterMessageLink
        :text="`Test reactivity: ${count}`"
        @click="count++"
      />
    </p>
  </div>
</template>
