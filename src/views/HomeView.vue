<script setup lang="ts">
import { loginUser } from '@/services/auth'
import { ref } from 'vue'

const emailAddress = ref('')
const password = ref('')

async function onSaveForm(e: Event) {
  e.preventDefault()

  const payload = { emailAddress: emailAddress.value, password: password.value }

  const response = await loginUser(payload)
}
</script>

<template>
  <main>
    <form @submit="onSaveForm">
      <input type="text" v-model="emailAddress" />
      <input type="text" v-model="password" />
      <button type="submit">Daxil ol</button>
    </form>
  </main>
</template>
