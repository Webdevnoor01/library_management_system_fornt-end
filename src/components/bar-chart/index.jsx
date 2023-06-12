/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";
const BarChart = ({ height, series, categories }) => {
  const state = {
    series: series,
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#4e4e4e",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 1,
      },
      xaxis: {
        categories,
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 768,
          yaxis: {
            categories,
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <Chart
      series={state.series}
      options={state.options}
      type="bar"
      height={height}
    />
  );
};

export default BarChart;
