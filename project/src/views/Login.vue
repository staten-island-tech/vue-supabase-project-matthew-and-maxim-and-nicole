<template>
    <div>
        <label for="">Email:</label>
        <input type="text" name="" v-model = "mail"/>
    </div>
    <div>
        <label for="">Password:</label>
        <input type="password" name="" v-model = "pass"/>
        <button @click = "signIn()">Submit</button>
    </div>
    <!-- <button @click = "getSession()">Get current session</button> -->
</template>

<script setup>
import router from '@/router';
import { supabase } from '../supabaseClient.js'
import { ref } from 'vue';

const mail = ref("")
const pass = ref("")

async function signIn () {
const {data: session, error} = await supabase.auth.signInWithPassword ({
    email: mail.value,
    password: pass.value,
}) 
if (error) {
    console.log(error)
} else {
    router.push("/store")
}
};

</script>

<style scoped>

</style>