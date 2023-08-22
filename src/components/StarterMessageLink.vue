<script setup lang="ts">
defineProps<{
  url?: string
  text: string
  icon?: 'github' | 'stackblitz'
}>();
</script>

<template>
  <component
    :is="url ? 'a' : 'button'" v-bind="{ ...(url ? { href: url, target: '_blank' } : {}) }"
    class="inline-flex items-center justify-center gap-1 rounded-md border border-transparent p-2 text-blue-700 hover:border-blue-300 hover:bg-blue-100 md:justify-start"
  >
    <i-mdi-github v-if="icon === 'github'" />
    <i-mdi-lightning-bolt v-else-if="icon === 'stackblitz'" />
    {{ text }}
  </component>
</template>
