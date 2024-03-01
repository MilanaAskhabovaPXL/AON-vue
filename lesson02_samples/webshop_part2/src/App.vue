
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link  class="navbar-brand" to="/">Shop</router-link>
        <!-- <a class="navbar-brand" href="/">Shop</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/shoppingcart" class="nav-link">Shopping cart</router-link>
              <!-- <a class="nav-link" href="/itemdetail">Item detail</a> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex me-3">
        <router-link to="/shoppingcart">
          <ShoppingCartSummary></ShoppingCartSummary>
        </router-link>
      </div>
    </nav>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>

</template>


<script setup>
import ShoppingCartSummary from './components/ShoppingCartSummary.vue';
</script>


<style scoped>
</style>
