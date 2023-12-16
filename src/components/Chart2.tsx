"use client";

import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Annotations from "highcharts/modules/annotations";
import highchartsAccessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  Annotations(Highcharts);
  highchartsAccessibility(Highcharts);
  ExportData(Highcharts);
}

const Chart2 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {}, []);

  const options1: Highcharts.Options = {
    chart: {
      polar: true,
    },

    accessibility: {
      description:
        "A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.",
    },

    title: {
      text: "Budget vs spending",
      x: -80,
    },

    pane: {
      size: "80%",
    },

    xAxis: {
      categories: [
        "Sales",
        "Marketing",
        "Development",
        "Customer Support",
        "Information Technology",
        "Administration",
      ],
      tickmarkPlacement: "on",
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      min: 0,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
    },

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
    },

    series: [
      {
        type: "area",
        name: "Allocated Budget",
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: "on",
        fillOpacity: 0.15,
      },
      {
        type: "area",
        name: "Actual Spending",
        data: [50000, 39000, 42000, 31000, 26000, 40000],
        pointPlacement: "on",
        fillOpacity: 0.15,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            pane: {
              size: "70%",
            },
          },
        },
      ],
    },
  };

  //   const options2: Highcharts.Options = {
  //     title: {
  //       text: "Corn vs wheat estimated production for 2020",
  //       align: "left",
  //     },
  //     xAxis: {
  //       categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
  //       crosshair: true,
  //       accessibility: {
  //         description: "Countries",
  //       },
  //       gridLineWidth: 1,
  //       lineWidth: 1,
  //     },
  //     yAxis: {
  //       min: 0,
  //       title: {
  //         text: "1000 metric tons (MT)",
  //       },
  //       gridLineWidth: 0,
  //       lineWidth: 1,
  //     },
  //     plotOptions: {
  //       column: {
  //         pointPadding: 0.3,
  //         borderWidth: 0,
  //       },
  //     },
  //     series: [
  //       {
  //         point: {
  //           events: {
  //             click: function () {
  //               alert("Category: " + this.category + ", value: " + this.y);
  //             },
  //           },
  //         },
  //         name: "Corn",
  //         data: [406292, 260000, 107000, 68300, 27500, 14500],
  //         type: "column",
  //         color: "red",
  //       },
  //       {
  //         name: "Wheat",
  //         data: [51086, 136000, 5500, 141000, 107180, 77000],
  //         type: "column",
  //         color: "blue",
  //       },
  //     ],
  //   };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      {/* <HighchartsReact highcharts={Highcharts} options={options2} /> */}
    </main>
  );
};

export default Chart2;
