<script setup lang="ts">
import { onMounted } from 'vue';
import FormField from './components/FormField.vue'

onMounted(() => {
  document.body.className = 'font-poppins bg-red'
})
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
          <FormField :field="'First Name'"></FormField>
          <FormField :field="'Last Name'"></FormField>
          <FormField :field="'Email Address'"></FormField>
          <FormField :field="'Password'"></FormField>

          <!-- Claim Button -->
          <div class="flex flex-col items-center w-full py-4 bg-green rounded-lg claim-shadow">
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