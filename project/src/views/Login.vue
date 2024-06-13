<template>
    <div>
      <div>
        <label>Email:</label>
        <input type="text" v-model="mail" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="pass" />
        <button @click="signInHandler">Submit</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useLoginStore } from '../stores/login.js'; 
  const mail = ref('');
  const pass = ref('');
  const loginStore = useLoginStore();
  
  async function signInHandler() {
    try {
      const session = await loginStore.signIn(mail.value, pass.value);
      console.log(mail.value, pass.value);
      console.log(session);
    } catch (error) {
      console.log(error);
    }
  }
  </script>
  
  <style scoped>

  </style>