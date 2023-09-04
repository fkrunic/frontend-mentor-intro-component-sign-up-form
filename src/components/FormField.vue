<script setup lang="ts">
import { ref } from 'vue';
import { match } from 'ts-pattern'

type FieldState
  = { kind: 'inactive' }
  | { kind: 'invalid' }
  | { kind: 'valid' }

type Validator = (input: string) => boolean

defineProps<{ 
  field: string, 
  validator: Validator
}>()

const emit = defineEmits(['validInput', 'invalidInput'])

const onInput = (event: Event, validator: Validator) => {
  const input = (event.target as HTMLInputElement).value

  if (validator(input)) {
    fieldState.value = { kind: 'valid' }
    emit('validInput')
  }
  else {
    fieldState.value = { kind: 'invalid' }
    emit('invalidInput')
  }
}

const fieldState = ref({ kind: 'inactive' } as FieldState)

const stateClasses = (fs: FieldState): Array<string> => {
  return match(fs)
    .with({ kind: 'inactive' }, () => [
      'border-[1px]',
      'border-grayish-blue/50'
    ])
    .with({ kind: 'valid' }, () => [
      'border-[1px]',
      'border-green'
    ])
    .with({ kind: 'invalid'}, () => [
      'border-[1px]',
      'border-red'
    ])
    .exhaustive()
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

    outline-none
    " 
    type="text" 
    :class="stateClasses(fieldState)"
    :placeholder="field"
    @input="(event) => onInput(event, validator)"
    > 
</template>
