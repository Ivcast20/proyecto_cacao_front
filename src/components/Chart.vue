<template>
  <div>
    <div>
      <select
        name="select"
        v-model="anioSeleccionado"
        @change="cambiarAnio($event)"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          class="btn btn-danger"
          v-on:click="cambiarGrafico('ColumnChart')"
        >
          Gráfico de Barras
        </button>
        <button
          :type="tipoGrafico"
          class="btn btn-warning"
          v-on:click="cambiarGrafico('PieChart')"
        >
          Gráfico de Pie
        </button>
        <button
          type="button"
          class="btn btn-success"
          v-on:click="cambiarGrafico('LineChart')"
        >
          Gráfico de Línea
        </button>
      </div>
    
      <GChart
        :type="tipoGrafico"
        :data="chartData"
        :options="chartOptions"
        style="width: 900px; height: 500px"
      />
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";
export default {
  name: "Chart",
  components: {
    GChart,
  },
  data() {
    return {
      exportaciones: null,
      anioSeleccionado: 2017,
      tipoGrafico: "ColumnChart",
      chartData: [],
      chartOptions: {
        title: "Exportaciones",
        legend: "left",
      },
    };
  },
  mounted() {
    this.traerDatos();
  },
  methods: {
    traerDatos(anio = 2017) {
      axios
        .get(`http://localhost:3000/api/cacao?anio=${anio}`)
        .then((response) => {
          this.exportaciones = response.data.exportaciones;
          this.chartData = this.exportaciones;
        });
    },
    cambiarAnio(evento) {
      this.anioSeleccionado = evento.target.value;
      this.traerDatos(this.anioSeleccionado);
    },
    cambiarGrafico(tipo) {
      this.tipoGrafico = tipo;
    },
  },
};
</script>

<style>
</style>