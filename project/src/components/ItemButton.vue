<script setup>
defineProps({
  value: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <button @click="$emit('clicked')">{{ value.name }}</button>
</template>