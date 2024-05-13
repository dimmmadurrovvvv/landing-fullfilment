<template>
  <ClientOnly>
    <ElDialog v-model="dialogVisible" :title="title">
      <slot></slot>
    </ElDialog>
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
})

const dialogVisible = defineModel<boolean>()
</script>
