<template>
    <div>
      <div>
        <label>Email:</label>
        <input type="text" v-model="mail" />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" v-model="user" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="pass" />
        <button @click="signUp">Submit</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useSignUpStore } from '../stores/signup.js'; // Adjusted the import path
  
  const mail = ref('');
  const user = ref('');
  const pass = ref('');
  const signUpStore = useSignUpStore();
  
  async function signUp() {
    try {
      const userData = await signUpStore.signUp(mail.value, user.value, pass.value);
      console.log(mail.value, user.value, pass.value);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }
  </script>
  
  <style scoped>
  
  </style>