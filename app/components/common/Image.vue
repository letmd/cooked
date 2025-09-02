<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  format?: string;
  placeholder?: string | boolean | number[];
  densities?: string;
  preload?: boolean;
  loading?: 'lazy' | 'eager' | undefined;
}>();
</script>

<template>
  <NuxtImg
    :src="src"
    :width="width"
    :height="height"
    :sizes="sizes"
    :format="format"
    :placeholder="placeholder"
    :densities="densities"
    :preload="preload"
    :loading="loading"
    :alt="alt"
  />
</template>
