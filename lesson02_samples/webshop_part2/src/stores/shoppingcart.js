import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingcart', {
    state: () => ({ 
        products: [] 
    }),
    getters: {
      totalNumberOfProducts: (state) => {
        return state.products.length;
      },
      totalPrice: (state) => {
        let total = 0; 
        state.products.forEach(prod => { total += prod.price });
        return total;
      }
    },
    actions: {
      addItem(product) {
        this.products.push(product);
      },
      clearCart() {
        this.products = [];
      },
      removeItem(productId) {
        this.products = this.products.filter(product => product.id !== productId);
      },
    },
  })