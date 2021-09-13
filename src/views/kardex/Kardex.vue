<template>
  <div class="w-100">
    <table class="table table-bordered table-hover mb-0 pt-2 pb-2">
      <tbody class="border-bottom-0">
        <tr class="border-bottom-0">
          <td width="40%">{{ kardex.producto }}</td>
          <td width="20%">{{ kardex.fecha.substr(0, 10) }}</td>
          <td width="40%">{{ kardex.accion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Kardex",
  props: {
    kardex: Object,
  },
};
</script>
