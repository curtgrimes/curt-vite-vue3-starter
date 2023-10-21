<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { RouterLinkProps } from 'vue-router';

const props = withDefaults(defineProps<{
  to?: RouterLinkProps['to']
  text?: string
  icon?: 'github' | 'stackblitz'
}>(), {
  to: '',
});

const isExternalLink = computed(() => String(props.to)?.startsWith('http'));
</script>

<template>
  <component
    :is="isExternalLink ? 'a' : RouterLink"
    v-bind="{ [isExternalLink ? 'href' : 'to']: to }"
  >
    <i-mdi-github v-if="icon === 'github'" />
    <i-mdi-lightning-bolt v-else-if="icon === 'stackblitz'" />
    <slot>{{ text }}</slot>
  </component>
</template>

<style scoped>
a,button {
  @apply inline-flex md:justify-start items-center justify-center gap-1 rounded-md border border-transparent px-2 py-1 text-blue-700 hover:border-blue-300 hover:bg-blue-100;
}
</style>
