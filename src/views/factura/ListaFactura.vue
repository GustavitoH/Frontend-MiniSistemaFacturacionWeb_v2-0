<template>
  <div class="w-100 p-3 bg-white">
    <h1>VENTAS</h1>
    <div class="my-custom-scrollbar">
      <table class="table table-bordered table-hover">
        <thead class="bg-head text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">CLIENTE</th>
            <th scope="col">FECHA</th>
            <th scope="col">TOTAL</th>
            <th scope="col">ACCIÓNN</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="factura in listaFacturas"
            :key="factura.id"
            v-on:click="obtenerFactura(factura)"
          >
            <th scope="row">{{ factura.id }}</th>
            <td>{{ factura.cliente }}</td>
            <td>{{ factura.fecha.substr(0, 10) }}</td>
            <td>{{ factura.total }}</td>
            <td>
              <button class="btn btn-primary" type="submit">Imprimir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--Modal-->
    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="mostrar === true">
            <Reporte :factura="objectfactura" :lista="listaDetalle" />
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import API_URL from "@/api";
import { mapActions, mapState } from "vuex";
import { Modal } from "bootstrap";
import Reporte from "@/views/factura/Reporte";
export default {
  name: "List",
  components: {
    Reporte,
  },
  computed: {
    ...mapState({
      listaFacturas: (state) => state.facturas.listaFacturas,
    }),
  },
  data() {
    return {
      objectfactura: {
        id: 0,
        cliente: "",
        fecha: "",
        subtotal: 0,
        total: 0,
      },
      modal: null,
      buscar: "",
      listaDetalle: {
        type: Array,
      },
      mostrar: false,
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
  },
  created() {
    this.loadFacturas();
  },
  methods: {
    ...mapActions("facturas", ["getListaFacturas"]),
    loadFacturas() {
      this.getListaFacturas();
    },
    obtenerFactura(factura) {
      axios.get(`${API_URL}/detallefacturas`).then((response) => {
        this.objectfactura = factura;
        this.listaDetalle = response.data;
        this.mostrar = true;
        this.modal.show();
      });
    },
  },
};
</script>

<style scoped>
.my-custom-scrollbar {
  overflow: scroll;
  height: 75vh;
}

.bg-head {
  background-color: #61c3a2;
}
</style>
