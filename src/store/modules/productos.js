import productos from "@/api/modules/productos";
const state = {
  listaProductos: [],
  listaMasVendidos: [],
  listaMenosVendidos: [],
  totalVendido: [],
};
const actions = {
  getListaProductos(context) {
    return productos.listaProductos().then((response) => {
      context.commit("GET_PRODUCTOS", response.data);
    });
  },
  getTotalProductos(context) {
    return productos.totalProductos().then((response) => {
      context.commit("GET_TOTAL_PRODUCTOS", response.data);
    });
  },
  getMasVendido(context) {
    return productos.masVendidos().then((response) => {
      context.commit("GET_MAS_VENDIDOS", response.data);
    });
  },
  getMenosVendido(context) {
    return productos.menosVendidos().then((response) => {
      context.commit("GET_MENOS_VENDIDOS", response.data);
    });
  },
  getTotalVendido(context) {
    return productos.totalVendido().then((response) => {
      context.commit("GET_TOTAL_VENDIDO", response.data);
    });
  },
  crearProducto(context, nuevoProducto) {
    return productos.crearProducto(nuevoProducto).then((response) => {
      context.commit("CREAR_PRODUCTO", response.data.producto);
      return response.data;
    });
  },
  modificarProducto(context, producto) {
    return productos.modificarProducto(producto).then((response) => {
      context.commit("MODIFICAR_PRODUCTO", producto);
      return response.data;
    });
  },
  eliminarProducto(context, producto) {
    return productos.eliminarProducto(producto).then((response) => {
      context.commit("ELIMINAR_PRODUCTO", producto);
      return response.data;
    });
  },
};

const mutations = {
  GET_PRODUCTOS(state, payload) {
    state.listaProductos = payload;
  },
  GET_TOTAL_PRODUCTOS(state, payload) {
    state.listaProductos = payload;
  },
  GET_MAS_VENDIDOS(state, payload) {
    state.listaMasVendidos = payload;
  },
  GET_MENOS_VENDIDOS(state, payload) {
    state.listaMenosVendidos = payload;
  },
  GET_TOTAL_VENDIDO(state, payload) {
    state.totalVendido = payload;
  },
  CREAR_PRODUCTO(state, payload) {
    state.listaProductos.push(payload);
  },
  MODIFICAR_PRODUCTO(state, payload) {
    const array = state.listaProductos;
    const idUpdateProd = (value) => {
      return value.id === payload.id;
    };
    state.listaProductos[array.findIndex(idUpdateProd)] = payload;
  },
  ELIMINAR_PRODUCTO(state, payload) {
    state.listaProductos.splice(state.listaProductos.indexOf(payload.id), 1);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
