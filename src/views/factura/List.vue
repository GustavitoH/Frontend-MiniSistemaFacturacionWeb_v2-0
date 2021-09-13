<template>
  <div class="w-100">
    <div class="row justify-content-between p-3">
      <input type="text" class="form-control" placeholder="Buscar" />
    </div>
    <div class="list-group my-custom-scrollbar">
      <producto
        :key="producto.id"
        :producto="producto"
        v-for="producto in listaProductos"
      />
    </div>
  </div>
</template>
<script>
import Producto from "@/views/factura/Producto";
export default {
  components: { Producto },
  name: "List",
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
  height: 50vh;
}
</style>
