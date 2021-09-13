import axios from "axios";
import API_URL from "@/api";

const listaDetalleFactura = () => axios.get(`${API_URL}/detallefacturas`);
const listaIdFactura = () => axios.get(`${API_URL}/detallefacturas/id`);
const crearDetalleFactura = (nuevoDetalle) =>
  axios.post(`${API_URL}/detallefacturas`, nuevoDetalle);

export default {
  listaDetalleFactura,
  listaIdFactura,
  crearDetalleFactura,
};
