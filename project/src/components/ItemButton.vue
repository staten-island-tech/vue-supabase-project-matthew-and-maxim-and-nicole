<template>
  <button @click="$emit('clicked', value)">
    <img :src="value.src" :alt="value.name" />
    <span>{{ value.name }}</span>
  </button>
</template>

<script setup>
defineProps({
  value: Object,
});
</script>

<style scoped>
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}
img {
  width: 35px;
  height: 35px;
}
</style>