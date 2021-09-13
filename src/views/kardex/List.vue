<template>
  <div class="w-100">
    <div class="d-flex justify-content-between mb-3">
      <div class="p-1 flex-grow-1 bd-highlight">
        <input
          type="text"
          class="form-control w-100"
          placeholder="Buscar"
          v-model="buscar"
        />
      </div>
      <div class="p-1 bd-highlight" v-if="mostrar === true">
        <button type="button" class="btn btn-primary" @click="modal.show()">
          Imprimir
        </button>
      </div>
    </div>
    <thead class="table table-bordered">
      <tr>
        <th class="pt-2 pb-2 bg-head text-white" width="5%">PRODUCTO</th>
        <th class="pt-2 pb-2 bg-head text-white" width="5%">FECHA</th>
        <th class="pt-2 pb-2 bg-head text-white" width="5%">ACCIÓN</th>
      </tr>
    </thead>
    <div class="table bg-white my-custom-scrollbar">
      <kardex
        :key="kardex.id"
        :kardex="kardex"
        v-for="kardex in listaFiltrada"
      />
    </div>
    <!--Modal-->
    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl">
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
            <Reporte :lista="listaFiltrada" />
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Kardex from "@/views/kardex/Kardex";
import { Modal } from "bootstrap";
import Reporte from "@/views/kardex/Reporte";
export default {
  name: "List",
  components: {
    Kardex,
    Reporte,
  },
  data() {
    return {
      modal: null,
      buscar: "",
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
  },
  computed: {
    listaFiltrada() {
      const match = this.buscar.toUpperCase();
      return this.listaKardex.filter((u) =>
        u.producto.toUpperCase().match(match)
      );
    },
  },
  props: {
    listaKardex: {
      type: Array,
    },
    mostrar: Boolean,
  },
};
</script>

<style scoped>
.my-custom-scrollbar {
  overflow: scroll;
  height: 58vh;
}

.bg-head {
  background-color: #61c3a2;
}
</style>
