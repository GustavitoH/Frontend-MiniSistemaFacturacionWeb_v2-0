<template>
  <div class="col-md-3 col-xl-2 px-sm-2 px-0 bg-dark min-vh-100">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        px-3
        pt-2
        text-white
        min-vh-100
      "
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          pb-3
          mb-md-0
          me-md-auto
          text-light text-decoration-none
        "
      >
        <span class="fs-5 d-none d-sm-inline">Menu</span>
      </a>
      <ul
        class="
          nav nav-pills
          flex-column
          mb-sm-auto mb-0
          align-items-center align-items-sm-start
        "
        id="menu"
      >
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            class="text-light nav-link px-0 align-middle"
          >
            <i class="fs-4 bi-speedometer2"></i>
            <span class="ms-1 d-none d-sm-inline">Facturación</span>
          </a>
          <ul
            class="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li class="w-100">
              <a href="#" class="text-light nav-link px-0">
                <router-link class="nav-link" :to="{ name: 'productos' }"
                  >Productos</router-link
                >
              </a>
            </li>
            <li>
              <a href="#" class="text-light nav-link px-0">
                <router-link class="nav-link" :to="{ name: 'factura' }">
                  Factura
                </router-link>
              </a>
            </li>
            <li>
              <a href="#" class="text-light nav-link px-0">
                <router-link class="nav-link" :to="{ name: 'listaFactura' }">
                  Ventas
                </router-link>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="text-light nav-link px-0">
            <router-link class="nav-link" :to="{ name: 'kardex' }"
              >Kardex</router-link
            >
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown pb-4">
        <a
          href="#"
          class="
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          "
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            class="rounded-circle"
          />
          <span class="d-none d-sm-inline mx-1">Integrantes</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">Joel Cujilema</a></li>
          <li><a class="dropdown-item" href="#">Joseph Alejandro</a></li>
          <li><a class="dropdown-item" href="#">Kevin Pillacela</a></li>
          <li><a class="dropdown-item" href="#">David Millán</a></li>
          <li><a class="dropdown-item" href="#">Gustavo Hidalgo</a></li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.sidebar {
  background-color: #091d36;
}
</style>
