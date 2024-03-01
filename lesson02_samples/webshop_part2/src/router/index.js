import { createRouter, createWebHistory } from 'vue-router';
import Shop from '../components/Shop.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ShopItemDetail from '../components/ShopItemDetail.vue'

const routes = [
    { path: '/', component: Shop },
    { path: '/shoppingcart', component: ShoppingCart },
    { path: '/itemdetail/:id', component: ShopItemDetail },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;