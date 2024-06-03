<template>
    <div>
        <label for="">Email:</label>
        <input type="text" name=""/>
    </div>
    <div>
        <label for="">Username:</label>
        <input type="text" name=""/>
    </div>
    <div>
        <label for="">Password:</label>
        <input type="text" name=""/>
        <button>Submit</button>
    </div>
</template>

<script setup>
async function signUp () {
    const {data: userData, error}  = await supabase.auth.signUp ({
        email: email.value,
        username: user.value,
        password: pass.value,
    })
    console.log(userData)
    if (error) {
        console.log(error)
    } else {
        insertData(userData)
        return userData
    }
};

</script>

<style scoped>

</style>