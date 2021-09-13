import { Modal } from 'bootstrap';
<template>
  <div class="list-group-item list-group-item-action">
    <div class="text-left float-start">
      <div class="d-flex justify-content-between">
        <h5 class="mb-1">
          <strong>{{ producto.id }}</strong> || {{ producto.producto }}
        </h5>
      </div>
      <small class="d-flex justify-content-left text-muted">
        Descripción:<span class="badge bg-warning text-dark">{{
          producto.descripcion
        }}</span></small
      >
      <small class="d-flex justify-content-left text-muted mt-1">
        Stock:<span class="">
          {{ producto.cantidad }}
        </span></small
      >
      <small class="d-flex text-muted mt-1">
        Precio:<span class="">
          {{ producto.precio }}
        </span></small
      >
    </div>
    <div class="btn-group-vertical float-end mt-1">
      <button
        type="button"
        class="btn btn-outline-primary btn-block m-1"
        @click="seleccionar()"
      >
        Seleccionar
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductoFactura",
  props: {
    producto: Object,
  },
  methods: {
    seleccionar() {
      this.$parent.$parent.nuevoProducto = { ...this.producto };
      this.$parent.$parent.modal.hide();
    },
  },
};
</script>
