import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        productList: [
            {name: 'Shirt', price: 20, id: 1},
            {name: 'Pants', price: 40, id: 2},
            {name: 'Shoes', price: 60, id: 3},
            {name: 'Hat', price: 10, id: 4},
            {name: 'Socks', price: 5, id: 5},
            {name: 'Underpants', price: 7, id: 6},
        ]
    }),
    getters: {
        getById: (state) => {
            return (productId) => {
                let id = parseInt(productId, 10)
                let product = state.productList.find(prod => prod.id === id)
                return product;
            }
        }
    }
});