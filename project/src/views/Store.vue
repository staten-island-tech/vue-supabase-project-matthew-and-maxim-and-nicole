<script setup>
import { onMounted, ref } from "vue";
import { useCartStore } from "../stores/counter";
import ItemButton from "../components/ItemButton.vue";
import { ITEMS } from "../constants/items";

const itemList = ref([]);
const items = ref(ITEMS);
const props = defineProps({
  id: String
})
const cartStore = useCartStore();

async function addItem(item){
  await cartStore.addItem(item, props.id);
}

async function removeItem(index){
  await cartStore.removeItem(index);
}

onMounted(()=>{
  cartStore.getSavedItems();
});
</script>

<template>
  <h2>Click image to remove</h2>
  <header>
    <div class="items-container">
      <div v-for="item in items" :key="item.id">
        <ItemButton :value="item" @clicked="addItem(item)" />
      </div>
    </div>
  </header>

  <main>
    <div
      v-for="(item, index) in itemList"
      :key="index"
      @click="removeItem(index)"
      class="image-container"
    >
      <img :src="item.src" class="item" />
    </div>
  </main>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 95vh;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.items-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h2 {
  margin-top: 20px;
  text-align: center;
}

main {
  margin-left: 240px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.image-container:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.item {
  height: 80px;
  object-fit: contain;
  margin: 10px;
}
</style>