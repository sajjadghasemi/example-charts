"use client";

import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import highchartsAccessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  highchartsAccessibility(Highcharts);
  ExportData(Highcharts);
}

const Chart6 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const options1: Highcharts.Options = {
    title: {
      text: "Efficiency Optimization by Branch",
    },
    xAxis: {
      categories: ["Seattle HQ", "San Francisco", "Tokyo"],
      lineWidth: 1,
      gridLineWidth: 1,
    },
    yAxis: [
      {
        lineWidth: 1,
        gridLineWidth: 1,
        min: 0,
        max: 100,
        title: {
          text: "Employees",
        },
      },
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        grouping: false,
        type: "bar",
        name: "Employees",
        color: "#E6E6E6",
        dataGrouping: {},
      },
      // {
      //   type: "bar",
      //   name: "Employees",
      //   color: "#56C5D055",
      //   data: [70, 70, 70],
      //   pointPlacement: 0,
      // },
      // {
      //   type: "bar",
      //   name: "Employees",
      //   color: "#56C5D0",
      //   data: [50, 50, 50],
      //   pointPlacement: 0.2,
      // },
    ],
  };

  // const options2: Highcharts.Options = {
  //   xAxis: [
  //     {
  //       min: 0,
  //       max: 100,
  //     },
  //   ],
  //   yAxis: [
  //     {
  //       min: 0,
  //       max: 100,
  //       // reversed: true,
  //     },
  //   ],
  //   series: [
  //     {
  //       type: "treemap",
  //       layoutAlgorithm: "sliceAndDice",
  //       layoutStartingDirection: "horizontal",
  //       borderColor: "#FFFFFF",
  //       borderWidth: 4,
  //       dataLabels: {
  //         style: {
  //           textOutline: "none",
  //           color: "#FFFFFF",
  //           fontWeight: "700",
  //           fontSize: "20px",
  //           fontFamily: "tahoma",
  //         },
  //       },
  //       clip: false,

  //       data: [
  //         {
  //           name: "C",
  //           value: 15,
  //           color: "#56C5D0",
  //         },
  //         {
  //           name: "D",
  //           value: 15,
  //           color: "#56C5D0",
  //         },
  //         {
  //           name: "E",
  //           value: 10,
  //           color: "#56C5D0",
  //         },
  //         {
  //           name: "B",
  //           value: 20,
  //           color: "#56C5D0",
  //         },
  //         {
  //           name: "سیم کارت",
  //           value: 40,
  //           color: "#56C5D0",
  //         },
  //       ],
  //     },
  //   ],
  //   title: {
  //     text: "Highcharts Treemap",
  //   },
  // };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      {/* <HighchartsReact highcharts={Highcharts} options={options2} /> */}
      <div onClick={() => setPosition({ x: 1, y: 2 })}>SFSAF</div>
    </main>
  );
};

export default Chart6;
