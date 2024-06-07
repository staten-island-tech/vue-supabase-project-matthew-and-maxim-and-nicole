<template>
    <div>
        <label for="">Email:</label>
        <input type="text" name="" v-model = "mail"/>
    </div>
    <div>
        <label for="">Password:</label>
        <input type="text" name="" v-model = "pass"/>
        <button @click = "signIn()">Submit</button>
    </div>
    <button @click = "getSession()">Get current session</button>
</template>

<script setup>
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
    console.log(session)
}
return session
};

async function getSession () {
    const {data, error} = await supabase.auth.getSession()
    console.log(data)
    if (error) {
        console.log(error)
    }
    return session
}

</script>

<style scoped>

</style>