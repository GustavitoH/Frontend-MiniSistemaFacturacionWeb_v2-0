import axios from "axios";
import API_URL from "@/api";

const listaKardex = () => axios.get(`${API_URL}/kardex`);

export default {
  listaKardex,
};
