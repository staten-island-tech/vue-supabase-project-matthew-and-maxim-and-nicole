import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as {name: string} [],
    id: '' as String, 
  }),
  actions: {
    addToCart() {
      this.cart.push(item)
    },
    insertId(userId: string) {
      this.id === (userId)
    }
  },
});
