import detalleFacturas from "@/api/modules/detalleFacturas";
const state = {
  listaDetalle: [],
  listaIdFactura: [],
};
const actions = {
  getListaDetalles(context) {
    return detalleFacturas.listaDetalleFactura().then((response) => {
      context.commit("GET_DETALLE_FACTURAS", response.data);
    });
  },

  getIdDetalle(context) {
    return detalleFacturas.listaIdFactura().then((response) => {
      context.commit("GET_ID_DETALLE", response.data);
    });
  },

  crearDetalle(context, nuevoDetalle) {
    return detalleFacturas
      .crearDetalleFactura(nuevoDetalle)
      .then((response) => {
        context.commit("CREAR_DETALLE_FACTURA", response.data.detalleFactura);
        return response.data;
      });
  },
};

const mutations = {
  GET_DETALLE_FACTURAS(state, payload) {
    state.listaDetalle = payload;
  },
  GET_ID_DETALLE(state, payload) {
    state.listaIdFactura = payload;
  },
  CREAR_DETALLE_FACTURA(state, payload) {
    state.listaDetalle.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
