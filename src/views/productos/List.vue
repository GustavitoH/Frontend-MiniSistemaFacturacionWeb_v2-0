<template>
  <div>
    <div class="d-flex justify-content-between p-3">
      <input type="text" class="form-control" placeholder="Buscar" />
      <button type="button" class="btn btn-primary me-4 ms-3">Buscar</button>
    </div>
    <div class="list-group my-custom-scrollbar">
      <producto
        :producto="producto"
        :key="producto.id"
        v-for="producto in listaProductos"
      />
    </div>
  </div>
</template>
<script>
import Producto from "@/views/productos/Producto";
export default {
  components: { Producto },
  name: "List",
  component: {
    Producto,
  },
  props: {
    listaProductos: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.my-custom-scrollbar {
  overflow: scroll;
  height: 65vh;
}
</style>
