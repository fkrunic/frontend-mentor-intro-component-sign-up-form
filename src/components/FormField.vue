<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ field: string }>()
const focused = ref(false)

const toggleFieldBorder = (isFocused: boolean): string => {
  return isFocused ? 'border-blue' : 'border-grayish-blue/50'
}

const toggleFocus = () => {
  console.log('Focused')
  focused.value = true
}

const toggleBlur = () =>{
  console.log('Un-focused')
  focused.value = false
}
</script>

<template>
  <div class="
    w-full 
    p-4 
    
    border-solid 
    border-[1px] 
    rounded
    
    hover:cursor-pointer
    "
    :class="toggleFieldBorder(focused)"
    >
    <input class="
      text-sm 
      font-semibold 
      text-dark-blue/50

      focus:outline-none
      focus:text-dark-blue/75
      " 
      type="text" 
      :placeholder="field"
      @focus="toggleFocus"
      @blur="toggleBlur"
      >
  </div>    
</template>