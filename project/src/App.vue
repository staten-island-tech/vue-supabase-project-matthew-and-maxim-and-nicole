<script setup>
import { ref } from "vue";
import ItemButton from "./components/ItemButton.vue";
import { ITEMS } from "./constants/items";

const itemList = ref([]);
const items = ref(ITEMS);

function addItem(item) {
  itemList.value.push(item)
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

function removeItem(index) {
  console.log(index);
  console.log(itemList.value[index]);
  itemList.value.splice(index, 1);
}
</script>

<template>
  <h2>Click image to remove</h2>
  <header>
    <div v-for="item in items">
      <ItemButton :value="item" @clicked="addItem(item)" />
    </div>
  </header>

  <div
    v-for="(item, index) in itemList"
    @click="removeItem(index)"
    class="horizontal-center"
  >
    <img :src="item.src" class="item" />
  </div>
  
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.horizontal-center {
  display: flex;
  justify-content: center;
}
.ingredient {
  height: 100px;
  object-fit: contain;
}
</style>

