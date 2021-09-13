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
        @click="modificarProducto()"
      >
        Editar
      </button>
      <button
        type="button"
        class="btn btn-outline-danger btn-block m-1"
        @click="deleteProducto()"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import swal from "sweetalert";

export default {
  name: "Producto",
  data() {
    return {
      prod: {
        id: 0,
        producto: "",
      },
    };
  },
  props: {
    producto: Object,
  },
  methods: {
    ...mapActions("productos", ["getListaProductos", "eliminarProducto"]),
    modificarProducto() {
      this.$parent.$parent.producto = { ...this.producto };
      this.$parent.$parent.newProducto.producto =
        this.$parent.$parent.producto.producto;
      this.$parent.$parent.newProducto.precio =
        this.$parent.$parent.producto.precio;
      this.$parent.$parent.newProducto.descripcion =
        this.$parent.$parent.producto.descripcion;
      this.$parent.$parent.newProducto.cantidad =
        this.$parent.$parent.producto.cantidad;
      this.$parent.$parent.newProducto.id = this.$parent.$parent.producto.id;
      this.$parent.$parent.buttonEdit = true;
      this.$parent.$parent.modal.show();
    },
    deleteProducto() {
      this.$parent.$parent.producto = { ...this.producto };
      this.prod.id = this.$parent.$parent.producto.id;
      this.prod.producto = this.$parent.$parent.producto.producto;

      swal(`¿Estás seguro de eliminar el producto: ${this.prod.producto}?`, {
        dangerMode: true,
        buttons: {
          Cancelar: "Cancelar",
          Eliminar: {
            value: "delete",
          },
        },
        icon: "warning",
      }).then((value) => {
        switch (value) {
          case "delete":
            this.eliminarProducto(this.prod).then((res) => {
              this.getListaProductos();
              swal("Buen Trabajo!", res.message, "success");
              this.newProducto.producto = "";
              this.newProducto.precio = 0;
              this.newProducto.descripcion = "";
              this.newProducto.cantidad = 0;
              this.buttonEdit = false;
            });
            break;
        }
      });
    },
  },
};
</script>
<style>
.swal-button--Eliminar {
  background-color: rgb(233, 57, 57);
  font-size: 16px;
  border: none;
}
.swal-button--Eliminar:hover {
  background-color: rgb(233, 57, 57) !important;
}
.swal-button--Cancelar {
  background-color: rgb(223, 223, 223);
  font-size: 16px;
  border: none;
  color: rgb(27, 27, 27);
}
.swal-button--Cancelar:hover {
  background-color: rgb(241, 241, 241) !important;
}
</style>
