import kardex from "@/api/modules/kardex";
const state = {
  listaKardex: [],
};
const actions = {
  getListaKardex(context) {
    return kardex.listaKardex().then((response) => {
      context.commit("GET_KARDEX", response.data);
    });
  },
};

const mutations = {
  GET_KARDEX(state, payload) {
    state.listaKardex = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
