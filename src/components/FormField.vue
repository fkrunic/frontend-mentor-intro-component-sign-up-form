<script setup lang="ts">
defineProps<{ field: string }>()
</script>

<template>
  <div class="w-full p-4 border-solid border-2 border-grayish-blue rounded">
    <p class="text-sm font-semibold text-dark-blue/70">{{ field }}</p>
  </div>    
</template>