<script setup>
import Shop from './components/Shop.vue';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <a class="nav-link" href="/cart">Shopping Cart</a>
            </li> -->
          </ul>
        </div>
      </div>
      <!-- <div class="d-flex me-3">
        show summary of cart here
      </div> -->
    </nav>
  </header>

  <main class="container">
    <Shop />
  </main>

</template>

<style scoped>
</style>
