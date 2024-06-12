import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    id: '' 
  }),
  actions: {
    addToCart() {
      this.cart.push(item)
    },
    insertId(userId) {
      this.id === (userId)
    }
  },
});
