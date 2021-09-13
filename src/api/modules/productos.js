import axios from "axios";
import API_URL from "@/api";

const listaProductos = () => axios.get(`${API_URL}/productos`);
const totalProductos = () => axios.get(`${API_URL}/productos/total`);
const masVendidos = () => axios.get(`${API_URL}/productos/masvendidos`);
const menosVendidos = () => axios.get(`${API_URL}/productos/menosvendidos`);
const totalVendido = () => axios.get(`${API_URL}/productos/totalventas`);
const crearProducto = (nuevoProducto) =>
  axios.post(`${API_URL}/productos`, nuevoProducto);
const modificarProducto = (producto) => {
  return axios.put(`${API_URL}/productos/${producto.id}`, producto);
};
const eliminarProducto = (producto) =>
  axios.delete(`${API_URL}/productos/${producto.id}`, producto);

export default {
  listaProductos,
  totalProductos,
  masVendidos,
  menosVendidos,
  totalVendido,
  crearProducto,
  modificarProducto,
  eliminarProducto,
};
