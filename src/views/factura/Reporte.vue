<template>
  <div class="w-100 p-2">
    <div id="reporte">
      <div class="w-100 text-start p-0 d-flex justify-content-between">
        <div>
          <p class="color-header fs-4">MAXIMARKET</p>
          <p>
            <span class="h-title">Dirección:</span> Av.nombre de la dirección
          </p>
          <p><span class="h-title">Teléfono:</span> 0989674225</p>
        </div>
        <div class="text-center">
          <p class="fs-2 fw-bold">FACTURA</p>
          <p class="fs-2 fw-bold">#{{ factura.id }}</p>
        </div>
      </div>
      <div class="text-start">
        <p class="fw-bold fs-5 color-header">CLIENTE</p>
        <p class="font-weight-bold" for="">
          <span class="h-title">Nombre: </span> {{ factura.cliente }}
        </p>
        <p class="font-weight-bold" for="">
          <span class="h-title">Fecha: </span> {{ factura.fecha.substr(0, 10) }}
        </p>
      </div>
      <div class="bg-body">
        <table class="table w-100">
          <thead class="table-head">
            <tr>
              <th width="5%" class="text-light" scope="col">PRODUCTO</th>
              <th width="5%" class="text-light" scope="col">CANTIDAD</th>
              <th width="5%" class="text-light" scope="col">PRECIO UNITARIO</th>
              <th width="5%" class="text-light" scope="col">IMPORTE</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="item in listaFiltrada" :key="item.total">
              <td width="40%">{{ item.producto }}</td>
              <td width="20%">{{ item.cantidad }}</td>
              <td width="40%">{{ item.preciounit }}</td>
              <td width="40%">{{ item.precio }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end mt-5">
        <div class="w-25 table-head rounded text-center">
          <p class="fw-bold text-white">TOTAL: {{ factura.total }}</p>
        </div>
      </div>
    </div>
    <button @click="download" type="button" class="btn btn-primary">
      Imprimir
    </button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

export default {
  props: {
    lista: null,
    factura: Object,
  },
  computed: {
    listaFiltrada() {
      return this.lista.filter((u) => u.id_factura === this.factura.id);
    },
  },
  methods: {
    download() {
      const quotes = document.getElementById("reporte");
      html2canvas(quotes).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new JsPDF("p", "mm", "a4");
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight;
        const ratio = pdfHeight / pdfWidth;
        this.pdfHeight = ratio * pdfWidth;
        doc.addImage(imgData, "PNG", 6, 10);
        doc.save("Factura.pdf");
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
#reporte {
  font-family: "Open Sans", sans-serif;
}
.color-header {
  color: #42b983;
  font-weight: bold;
}
.table-head {
  background-color: #42b983;
}
.h-title {
  font-weight: bold;
}
</style>
