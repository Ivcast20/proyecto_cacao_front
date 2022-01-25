<template>
  <div>
    <div>
      <select name="select" v-model="seleccionado">
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <div>
        {{ seleccionado }}
      </div>
    </div>
    <canvas id="grafico"></canvas>
    <div>Lista de exportaciones</div>
    <div v-for="(expor, index) in exportaciones" v-bind:key="index">
      {{ expor }}
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import axios from "axios";
export default {
  name: "Chart",
  data() {
    return {
      exportaciones: null,
      seleccionado: 2017,
      dataChart: {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "# of Votes",
              data: [],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    };
  },
  mounted() {
    this.traerDatos();
    this.mostrarGrafico();
  },
  methods: {
    async traerDatos() {
      let listaPaises = [];
      let listaExport = [];
      await axios.get("http://localhost:3000/api/cacao").then((response) => {
        this.exportaciones = response.data.exportaciones;
        // for (let exportac of this.exportaciones) {
        //   this.dataChart.data.labels.push(exportac["pais"]);
        //   this.dataChart.data.datasets.data.push(exportac["num_export"]);
        // }

        this.exportaciones.forEach((exportacion) => {
          //console.log(exportacion["pais"], exportacion["num_export"]);
          listaPaises.push(exportacion["pais"]);
          listaExport.push(exportacion["num_export"]);
        });
      });
      this.dataChart.data.labels = listaPaises;
      this.dataChart.data.datasets[0].data = listaExport;
    },
    mostrarGrafico() {
      const chart = document.getElementById("grafico");
      new Chart(chart, this.dataChart);
    },
  },
};
</script>

<style>
</style>