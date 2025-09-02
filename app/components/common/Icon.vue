<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <SvgIcon :name="name" />
</template>
