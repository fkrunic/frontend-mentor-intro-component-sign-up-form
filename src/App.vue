<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-poppins bg-red/40'
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
</template>
