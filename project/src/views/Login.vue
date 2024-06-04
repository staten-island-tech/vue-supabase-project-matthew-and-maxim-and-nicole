<template>
    <div>

    </div>
</template>

<script setup>
import { supabase } from '../supabaseClient.js'
import { ref } from 'vue';

const mail = ref("")
const pass = ref("")

async function login () {
const {data: session, error} = await supabase.auth.loginWithPassword ({
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

</script>

<style scoped>

</style>