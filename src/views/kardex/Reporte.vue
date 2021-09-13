<template>
  <div class="w-100r">
    <div id="reporte">
      <h4 class="text-left font-weight-bold text-info mb-4">MAXIMARKET</h4>
      <div>
        <div class="row">
          <label class="font-weight-bold pl-3" for="">Producto:</label>
        </div>
        <!-- Fin de los datos -->
      </div>
      <table class="table w-100">
        <thead class="bg-info">
          <tr>
            <th width="5%" class="text-light" scope="col">producto</th>
            <th width="5%" class="text-light" scope="col">fecha</th>
            <th width="5%" class="text-light" scope="col">accion</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="item in lista" :key="item.idkardex">
            <td width="40%">{{ item.producto }}</td>
            <td width="20%">{{ item.fecha }}</td>
            <td width="40%">{{ item.accion }}</td>
          </tr>
        </tbody>
      </table>
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
    lista: {
      type: Array,
    },
  },
  methods: {
    download() {
      const quotes = document.getElementById("reporte");
      html2canvas(quotes).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new JsPDF("l", "mm", "a4");
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight;
        const ratio = pdfHeight / pdfWidth;
        this.pdfHeight = ratio * pdfWidth;
        doc.addImage(imgData, "PNG", 2, 5);
        doc.save("kardex.pdf");
      });
    },
  },
};
</script>
