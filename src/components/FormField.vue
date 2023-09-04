<script setup lang="ts">
type Validator = (input: string) => boolean

defineProps<{ 
  field: string, 
  validator: Validator
}>()

const emit = defineEmits(['valid'])

const onInput = (event: Event, validator: Validator) => {
  const input = (event.target as HTMLInputElement).value
  if (validator(input)) {
    emit('valid')
  }
}
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
    @input="(event) => onInput(event, validator)"
    > 
</template>
