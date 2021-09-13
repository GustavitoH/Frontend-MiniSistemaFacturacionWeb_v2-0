<template>
  <div class="w-100 m-auto shadow p-3 bg-body rounded">
    <h1 class="text-start">Productos</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <h6 class="nav-link" href="#">
              Productos<span class="sr-only"></span>
            </h6>
          </li>
          <li class="nav-item justify-content-center">
            <h6 class="nav-link" href="#">/ Lista</h6>
          </li>
        </ul>
      </div>
      <div class="justify-content-end">
        <button
          type="button"
          class="btn btn-primary me-4"
          @click="modal.show()"
        >
          Agregar
        </button>
      </div>
    </nav>
    <div class="d-flex justify-content-end flex-row bd-highlight mb-2 mt-2">
      <!--Modal-->
      <div
        class="modal fade"
        ref="exampleModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Producto</h5>
              <button
                type="button"
                class="btn-close"
                @click="modal.hide()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="justify-content-center text-start">
                <div class="d-flex bd-highlight mb-3">
                  <div class="p-2 bd-highlight col-md-6">
                    <label for="inputProducto">producto</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputProducto"
                      v-model="newProducto.producto"
                      required
                    />
                  </div>

                  <div class="p-2 bd-highlight col-md-6">
                    <label for="inputPrecio">Precio</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputPrecio"
                      v-model="newProducto.precio"
                      required
                    />
                  </div>
                </div>
                <div class="d-flex bd-highlight mb-3">
                  <div class="p-2 bd-highlight col-md-6">
                    <label for="inputDescripcion">Descripcion</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail"
                      v-model="newProducto.descripcion"
                    />
                  </div>
                  <div class="p-2 bd-highlight col-md-6">
                    <label for="inputCantidad">Cantidad</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputCantidad"
                      v-model="newProducto.cantidad"
                      required
                    />
                  </div>
                </div>
                <!-------------------------------Alert---------------------------->
                <div v-if="esvacio">
                  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                    <symbol
                      id="exclamation-triangle-fill"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </symbol>
                  </svg>
                  <div
                    class="alert alert-danger d-flex align-items-center w-100"
                    role="alert"
                  >
                    <svg
                      class="bi flex-shrink-0 me-2"
                      width="24"
                      height="24"
                      role="img"
                      aria-label="Danger:"
                    >
                      <use xlink:href="#exclamation-triangle-fill" />
                    </svg>
                    <div>Complete los campos vacíos</div>
                  </div>
                </div>
                <!--------------------------------------------------------------->
                <button
                  type="button"
                  class="btn btn-primary float-right me-2"
                  v-if="buttonEdit"
                  @click="editarProducto()"
                >
                  Editar
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="modal.hide()"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-success float-right m-2"
                @click="crearNuevoProducto()"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <List :listaProductos="listaProductos" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import swal from "sweetalert";
import { Modal } from "bootstrap";
import List from "@/views/productos/List";
export default {
  name: "IndexProductos",
  data() {
    return {
      esvacio: false,
      buttonEdit: false,
      newProducto: {
        id: 0,
        producto: "",
        precio: 0,
        descripcion: "",
        cantidad: 0,
      },
      producto: {},
      modal: null,
    };
  },
  components: {
    List,
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
  },
  computed: {
    ...mapState({
      listaProductos: (state) => state.productos.listaProductos,
    }),
  },
  created() {
    this.loadProductos();
  },
  watch: {
    "newProducto.producto": function () {
      this.loadProductos();
    },
  },
  methods: {
    ...mapActions("productos", [
      "getListaProductos",
      "crearProducto",
      "modificarProducto",
      "eliminarProducto",
    ]),
    loadProductos() {
      this.getListaProductos();
    },
    crearNuevoProducto() {
      this.esvacio = false;
      if (
        this.newProducto.producto === "" ||
        this.newProducto.precio <= 0 ||
        this.newProducto.descripcion === "" ||
        this.newProducto.cantidad <= 0
      ) {
        this.esvacio = true;
      } else {
        this.crearProducto(this.newProducto).then((res) => {
          swal("Buen Trabajo!", res.message, "success");
          this.newProducto.producto = "";
          this.newProducto.precio = 0;
          this.newProducto.descripcion = "";
          this.newProducto.cantidad = 0;
        });
        this.modal.hide();
      }
    },
    editarProducto() {
      this.esvacio = false;
      if (
        this.newProducto.producto === "" ||
        this.newProducto.precio <= 0 ||
        this.newProducto.descripcion === "" ||
        this.newProducto.cantidad <= 0
      ) {
        this.esvacio = true;
      } else {
        this.modificarProducto(this.newProducto).then((res) => {
          swal("Buen Trabajo!", res.message, "success");
          this.newProducto.producto = "";
          this.newProducto.precio = 0;
          this.newProducto.descripcion = "";
          this.newProducto.cantidad = 0;
          this.buttonEdit = false;
        });
        this.modal.hide();
      }
    },
  },
};
</script>
