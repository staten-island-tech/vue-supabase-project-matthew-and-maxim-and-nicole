<template>
    <div>
        <label for="">Email:</label>
        <input type="text" name="" v-model = "mail"/>
    </div>
    <div>
        <label for="">Username:</label>
        <input type="text" name="" v-model = "user"/>
    </div>
    <div>
        <label for="">Password:</label>
        <input type="password" name="" v-model = "pass"/>
        <button @click = "signUp()">Submit</button>
    </div>
</template>

<script setup>
import { supabase } from '../supabaseClient.js'
import { ref } from 'vue';

const mail = ref("")
const user = ref("")
const pass = ref("")

async function signUp () {
    const {data: userData, error}  = await supabase.auth.signUp ({
        email: mail.value,
        username: user.value,
        password: pass.value,
    })
    console.log(mail.value, user.value, pass.value)
    console.log(userData)
    if (error) {
        console.log(error)
    } else {
        insertData(userData);
        return userData
    }
};

async function insertData (userData) {
    const {data: insertData, error: insertError} = await supabase
    .from ('userInfo')
    .insert ([
        {id: userData.user.id, email: mail.value, username: user.value, password: pass.value}
    ])
    if (insertError) {
        console.log(insertError);
    } else {
        console.log(insertData);
    }
};

</script>

<style scoped>

</style>