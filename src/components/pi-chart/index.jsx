/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";
const PiChart = ({ height, data, labels }) => {
  return (
    <Chart
      series={data}
      options={{
        color: ["#181ee8", "#181ee8"],
        labels: labels,
        chart: {
          background: "transparent",
          foreColor: "#4e4e4e",
          fontFamily: '"Open sans", sans-sarif',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return Math.round(val) + "%";
          },
          style: {
            fontSize: "12px",
          },
        },
        legend: {
          position: "bottom",
          itemMargin: 15,
          fontSize: 15,
          fontFamily: '"Open sans", sans-sarif',
          fontWeight: "bold",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  color: "pink",
                  fontSize: 20,
                  fontFamily: '"Open sans", sans-sarif',
                },
              },
            },
          },
        },
      }}
      type="donut"
      height={height}
      //   width={width}
    />
  );
};

export default PiChart;
