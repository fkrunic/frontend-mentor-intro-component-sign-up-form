<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FormField from './components/FormField.vue'
import { ValidationResult } from './common'
import * as EmailValidator from 'email-validator'

onMounted(() => {
  document.body.className = 'font-poppins bg-red'
})

const nonEmptyValidator = (fieldName: string, input: string): ValidationResult => {
  if (input.length > 0) {
    return { kind: 'valid' }
  } else {
    return { kind: 'invalid', err: fieldName + ' cannot be empty.'}
  }
}

const emailValidator = (_fieldName: string, input: string): ValidationResult => {
  if (EmailValidator.validate(input)) {
    return { kind: 'valid' }
  } else if (input.length == 0) {
    return { kind: 'invalid', err: 'Email Address cannot be empty.' }
  } else {
    return { kind: 'invalid', err: "This does not look like an email address." }
  }
}

type FormState = {
  validFirstName: boolean,
  validLastName: boolean,
  validEmail: boolean,
  validPassword: boolean
}

const formState = ref({
  validFirstName: false,
  validLastName: false,
  validEmail: false,
  validPassword: false
} as FormState)

const onValidFirstName = (fs: FormState) => {
  formState.value = {...fs, validFirstName: true }
}

const onInvalidFirstName = (fs: FormState) => {
  formState.value = {...fs, validFirstName: false }
}

const onValidLastName = (fs: FormState) => {
  formState.value = {...fs, validLastName: true }
}

const onInvalidLastName = (fs: FormState) => {
  formState.value = {...fs, validLastName: false }
}

const onValidEmail = (fs: FormState) => {
  formState.value = {...fs, validEmail: true }
}

const onInvalidEmail = (fs: FormState) => {
  formState.value = {...fs, validEmail: false }
}

const onValidPassword = (fs: FormState) => {
  formState.value = {...fs, validPassword: true }
}

const onInvalidPassword = (fs: FormState) => {
  formState.value = {...fs, validPassword: false }
}


const canSubmitForm = (fs: FormState): boolean => {
  return fs.validFirstName 
    && fs.validLastName 
    && fs.validEmail
    && fs.validPassword
}

const claimClasses = (canSubmit: boolean): Array<string> => {
  if (canSubmit) {
    return ['bg-green', 'claim-shadow', 'cursor-pointer']
  } else {
    return ['bg-grayish-blue']
  }
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">

    <!-- Page Layout -->
    <div class="flex flex-col items-center gap-10 mb-10 mt-20">

      <!-- Callout -->
      <div class="flex flex-col items-center gap-8">
        <p class="px-8 text-center text-2xl font-bold text-white">
          Learn to code by watching others
        </p>
        <p class="px-6 text-center text-sm text-white leading-7">
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>

      <!-- Interactive -->
      <div class="flex flex-col items-center m-6 gap-6">

        <!-- Free Trial Banner -->
        <div class="flex flex-col items-center w-full p-6 bg-blue rounded-xl hard-shadow">
          <p class="w-40 text-center text-sm text-white">
            <span class="font-bold">Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        <!-- Sign-up Card -->
        <div class="flex flex-col items-center gap-4 p-6 bg-white rounded-xl hard-shadow">
          <FormField 
            :fieldName="'First Name'" 
            :validator="nonEmptyValidator" 
            @valid-input="onValidFirstName(formState)"
            @invalid-input="onInvalidFirstName(formState)">
          </FormField>
          <FormField 
            :fieldName="'Last Name'" 
            :validator="nonEmptyValidator" 
            @valid-input="onValidLastName(formState)"
            @invalid-input="onInvalidLastName(formState)">
          </FormField>
          <FormField 
            :fieldName="'Email Address'" 
            :validator="emailValidator" 
            @valid-input="onValidEmail(formState)"
            @invalid-input="onInvalidEmail(formState)">
          </FormField>
          <FormField 
            :fieldName="'Password'" 
            :validator="nonEmptyValidator" 
            @valid-input="onValidPassword(formState)"
            @invalid-input="onInvalidPassword(formState)">
          </FormField>

          <!-- Claim Button -->
          <div 
            class="flex flex-col items-center w-full py-4 rounded-lg"
            :class="claimClasses(canSubmitForm(formState))"
            >
            <p class="text-white">CLAIM YOUR FREE TRIAL</p>
          </div>

          <!-- Terms and Services -->
          <p class="text-center text-[0.6rem] text-grayish-blue font-semibold">
            By clicking the button, you are agreeing to
            our <span class="font-bold text-red">Terms and Services</span>
          </p>          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.claim-shadow {
  box-shadow: 0 3px 0 0 hsl(154, 59%, 40%)
}
.hard-shadow {
  box-shadow: 0 8px 0 0 hsla(0, 0%, 0%, 15%)
}
</style>