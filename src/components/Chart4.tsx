"use client";

import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Annotations from "highcharts/modules/annotations";
import HighchartsWC from "highcharts/modules/wordcloud";
import highchartsAccessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import highchartsMap from "highcharts/modules/map";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  Annotations(Highcharts);
  highchartsAccessibility(Highcharts);
  ExportData(Highcharts);
  highchartsMap(Highcharts);
  HighchartsWC(Highcharts);
}

const Chart4 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const options1: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ["IRMCI", "IRANCELL", "RIGHTEL"],
    },
    yAxis: {
      min: 0,
      lineWidth: 1,
      gridLineWidth: 1,
      title: {
        text: "Goals",
      },
    },
    legend: {},
    plotOptions: {
      series: {
        stacking: "percent",
      },
    },
    series: [
      {
        type: "bar",
        name: "Shaki",
        data: [10, 60, 50],
        color: "#CF1A2C",
        borderRadius: 5,
        pointWidth: 20,
      },
      {
        type: "bar",
        name: "Khonsa",
        data: [80, 20, 20],
        color: "#E6E6E6",
        pointWidth: 20,
      },
      {
        type: "bar",
        name: "Hami",
        data: [10, 20, 30],
        color: "#0B8A00",
        pointWidth: 20,
      },
    ],
  };

  const options2: Highcharts.Options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        type: "line",
        data: [
          {
            x: 1,
            y: 3,
          },
          {
            x: 1.5,
            y: 4,
          },
          {
            x: 2,
            y: 1,
          },
          {
            x: 2.5,
            y: 2,
          },
        ],
      },
    ],
  };

  const options3: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
      height: "80%",
    //   events: {
    //     load: function () {
    //       this.yAxis[0].ticks[100].label?.translate(10, 16);
    //       this.yAxis[0].ticks[0].label?.translate(-10, 16);
    //       this.yAxis[0].ticks[50].label?.hide();
    //     },
    //   },
    },

    credits: {
      enabled: false,
    },

    title: {
      text: "Speedometer",
    },

    pane: {
      startAngle: -100,
      endAngle: 100,
      background: [],
      center: ["50%", "75%"],
      size: "110%",
    },

    yAxis: {
      min: 0,
      max: 100,
      tickLength: 0,
      minorTickInterval: null,
      lineWidth: 0,
      offset: 5,
      labels: {
        enabled: true,
        distance: 16,
        padding:10
      },
      plotBands: [
        {
          from: 0,
          to: 40,
          color: "#DDDF0D", // green
          thickness: 16,
        },
        {
          from: 40,
          to: 60,
          color: "#55BF3B", // yellow
          thickness: 16,
        },
        {
          from: 60,
          to: 100,
          color: "#DF5353", // red
          thickness: 16,
        },
      ],
    },

    series: [
      {
        type: "gauge",
        name: "Speed",
        data: [60],
        dataLabels: {
          format: "{y}",
          borderWidth: 0,
          style: {
            fontSize: "16px",
          },
        },
        dial: {
          radius: "90%",
          backgroundColor: "#BABABA",
          baseWidth: 8,
          topWidth: 8,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "#BABABA",
          radius: 10,
        },
      },
    ],
  };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      <div className="flex justify-between">
        <div className="w-1/4">
          <HighchartsReact highcharts={Highcharts} options={options3} />
        </div>
        <div className="w-3/4">
          <HighchartsReact highcharts={Highcharts} options={options2} />
        </div>
      </div>
      <div onClick={() => setPosition({ x: 1, y: 2 })}>SFSAF</div>
    </main>
  );
};

export default Chart4;
