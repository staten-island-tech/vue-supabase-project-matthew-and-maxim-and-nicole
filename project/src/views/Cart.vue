<template>
    <div>
      <h2>Shopping Cart</h2>
      <div v-if="itemList.length === 0">Your cart is empty.</div>
      <div v-else>
        <div
          v-for="(item, index) in itemList"
          :key="index"
          class="image-container"
        >
          <img :src="item.src" class="item" />
          <button @click="removeItem(index)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../supabaseClient.js';
  
  const itemList = ref([]);
  
  const props = defineProps({
    id: String
  });
  
  async function getSavedItems() {
    const { data: cart, error } = await supabase
      .from('cart')
      .select('item')
      .eq('user_id', props.id);
    if (error) {
      console.log(error);
    } else {
      itemList.value = cart.map(entry => entry.item);
    }
  }
  
  async function removeItem(index) {
    const itemToRemove = itemList.value[index];
    const { error } = await supabase
      .from('cart')
      .delete()
      .eq('item', itemToRemove)
      .eq('user_id', props.id);
    if (error) {
      console.log(error);
    } else {
      itemList.value.splice(index, 1);
    }
  }
  
  onMounted(getSavedItems);
  </script>
  
  <style scoped>
  .image-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }
  
  .item {
    height: 80px;
    object-fit: contain;
    margin: 10px;
  }
  
  button {
    background-color: #ff4b5c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff1e3c;
  }
  </style>