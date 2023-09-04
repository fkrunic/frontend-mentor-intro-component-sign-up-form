<script setup lang="ts">
defineProps<{ field: string }>()
</script>

<template>
  <input class="
    w-full 
    p-4 
    
    border-solid 
    border-[1px] 
    border-grayish-blue/50
    rounded

    text-sm 
    font-semibold 
    text-dark-blue/50
    placeholder-dark-blue/25

    focus:outline-none
    focus:border-blue
    focus:border-[2px]
    focus:text-dark-blue/75
    focus:-my-[1px]
    " 
    type="text" 
    :placeholder="field"
    > 
</template>
