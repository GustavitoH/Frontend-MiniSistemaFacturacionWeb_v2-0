import facturas from "@/api/modules/facturas";
const state = {
  listaFacturas: [],
};
const actions = {
  getListaFacturas(context) {
    return facturas.listaFacturas().then((response) => {
      context.commit("GET_FACTURAS", response.data);
    });
  },
  crearFactura(context, nuevaFactura) {
    return facturas.crearFactura(nuevaFactura).then((response) => {
      context.commit("CREAR_FACTURA", response.data.factura);
      return response.data;
    });
  },
};

const mutations = {
  GET_FACTURAS(state, payload) {
    state.listaFacturas = payload;
  },
  CREAR_FACTURA(state, payload) {
    state.listaFacturas.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
