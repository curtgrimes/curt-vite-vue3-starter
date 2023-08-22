<script setup lang="ts">
defineProps<{
  url?: string;
  text: string;
  icon?: "github" | "stackblitz";
}>();
</script>

<template>
  <component
    :is="url ? 'a' : 'button'"
    v-bind="{ ...(url ? { href: url, target: '_blank' } : {}) }"
    class="inline-flex items-center gap-1 text-blue-700 hover:bg-blue-100 border border-transparent hover:border-blue-300 p-2 rounded-md"
  >
    <i-mdi-github v-if="icon === 'github'" />
    <i-mdi-lightning-bolt v-else-if="icon === 'stackblitz'" />
    {{ text }}
  </component>
</template>
