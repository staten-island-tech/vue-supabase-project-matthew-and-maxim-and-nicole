<template>
    <div>

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

<style lang="scss" scoped>

</style>