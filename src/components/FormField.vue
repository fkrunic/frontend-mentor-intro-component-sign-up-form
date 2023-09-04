<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ field: string }>()
const focused = ref(false)

const toggleFocusClasses = (isFocused: boolean): Array<string> => {
  const fieldBorder = isFocused ? 'border-blue' : 'border-grayish-blue/50'
  const borderSize = isFocused ? 'border-[2px]' : 'border-[1px]'
  return [fieldBorder, borderSize]
}

const toggleFocus = () => {
  focused.value = true
}

const toggleBlur = () =>{
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
    :class="toggleFocusClasses(focused)"
    >
    <input class="
      text-sm 
      font-semibold 
      text-dark-blue/50
      placeholder-dark-blue/25

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

<style scoped>
* {
  box-sizing: border-box;
}
</style>