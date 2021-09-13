<template>
  <div class="w-100 bg-white">
    <h1>Kardex de ventas</h1>
    <div class="p-4">
      <List :listaKardex="listaKardex" :mostrar="true" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import List from "@/views/kardex/List";

export default {
  name: "Index",
  components: {
    List,
  },
  created() {
    this.loadKardex();
  },
  computed: {
    ...mapState({
      listaKardex: (state) => state.kardex.listaKardex,
    }),
  },
  methods: {
    ...mapActions("kardex", ["getListaKardex"]),
    loadKardex() {
      this.getListaKardex();
    },
  },
};
</script>
