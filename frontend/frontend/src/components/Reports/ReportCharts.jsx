import { useState } from "react";
import Chart from "react-apexcharts";

const ReportCharts = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Customers",
        data: [15, 11, 32, 18, 9, 24, 11],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#ffffff", // This sets default text color to white
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#ffffff"], // For data labels if enabled
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: "#ffffff",
          },
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ffffff",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark", // Optional: ensures tooltip matches dark background
      },
      legend: {
        labels: {
          colors: "#ffffff", // Sets the legend (Sales, Revenue, Customers) text color to white
        },
      },
    },
  });

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default ReportCharts;
