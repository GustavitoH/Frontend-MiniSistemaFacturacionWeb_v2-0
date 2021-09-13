<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h3 class="navbar-brand" href="/">MAXIMARKET</h3>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'productos' }"
              >Productos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'factura' }">
              Factura
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
