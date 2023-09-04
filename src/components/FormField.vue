<script setup lang="ts">
import { ref } from 'vue';
import { match, P } from 'ts-pattern'
import { Validator } from '../common';

type FieldState
  = { kind: 'inactive' }
  | { kind: 'invalid', err: string }
  | { kind: 'valid' }

defineProps<{ 
  fieldName: string, 
  validator: Validator
}>()

const emit = defineEmits(['validInput', 'invalidInput'])

const onInput = (fieldName: string, event: Event, validator: Validator) => {
  const input = (event.target as HTMLInputElement).value
  const res = validator(fieldName, input)

  match(res)
    .with({ kind: 'valid'}, () => {
      fieldState.value = { kind: 'valid' }
      emit('validInput')
    })
    .with({ kind: 'invalid', err: P.select() }, (err) => {
      fieldState.value = { kind: 'invalid', err }
      emit('invalidInput')
    })
    .exhaustive()
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
  <div class="relative flex flex-col gap-2 items-end">
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
    :placeholder="fieldName"
    @input="(event) => onInput(fieldName, event, validator)"
    > 
    <p class="text-right text-xs text-red" v-if="fieldState.kind === 'invalid'">{{  fieldState.err }}</p>
    <img class="absolute top-4 right-4" src="../assets/icon-error.svg" v-if="fieldState.kind === 'invalid'">
  </div>
</template>
