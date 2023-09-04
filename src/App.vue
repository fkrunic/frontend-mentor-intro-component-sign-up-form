<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-poppins bg-red/40'
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">

    <!-- Page Layout -->
    <div class="flex flex-col items-center">

      <!-- Callout -->
      <div class="flex flex-col items-center">
        <p>Learn to code by watching others</p>
        <p>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>

      <!-- Interactive -->
      <div class="flex flex-col items-center bg-white rounded-xl">

        <!-- Free Trial Banner -->
        <div class="flex flex-row">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        <!-- Sign-up Form -->
        <div class="flex flex-col items-center">
          <div>
            <p>First Name</p>
          </div>
          <div>
            <p>Last Name</p>
          </div>
          <div>
            <p>Email Address</p>
          </div>
          <div>
            <p>Password</p>
          </div>          
        </div>

        <!-- Claim Button -->
        <div>
          <p>CLAIM YOUR FREE TRIAL</p>
        </div>

        <!-- Terms and Services -->
        <p>
          By clicking the button, you are agreeing to
          our <span>Terms and Services</span>
        </p>
      </div>
    </div>
  </div>
</template>
