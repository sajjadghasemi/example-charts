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
import TreeMap from "highcharts/modules/treemap";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  Annotations(Highcharts);
  highchartsAccessibility(Highcharts);
  ExportData(Highcharts);
  highchartsMap(Highcharts);
  HighchartsWC(Highcharts);
  TreeMap(Highcharts);
}

const Chart5 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const categories = ["0-4", "5-9", "10-14", "15-19", "20-24"];

  const options1: Highcharts.Options = {
    chart: {
      height: 600,
    },
    title: {
      text: "Population pyramid for Somalia, 2021",
    },
    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. Age {xDescription}, {value}%.",
      },
    },
    xAxis: [
      {
        categories: categories,
        reversed: false,
        accessibility: {
          description: "Age (male)",
        },
        gridLineWidth: 1,
        labels: {
          // pa,
        },
      },
    ],

    legend: {
      enabled: false,
    },

    yAxis: {
      title: {
        text: null,
      },
      lineWidth: 1,
      gridLineWidth: 1,
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 5%",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    tooltip: {
      format:
        "<b>{series.name}, age {point.category}</b><br/>" +
        "Population: {(abs point.y):.1f}%",
    },

    series: [
      {
        type: "bar",
        stack: 4,
        name: "Male",
        color: "red",
        data: [-8.98, -7.52, -6.65, -5.72, -4.85],
      },
      {
        type: "bar",
        stack: 4,
        name: "Female",
        color: "red",
        data: [8.84, 7.42, 6.57, 5.68, 4.83],
      },
      {
        type: "bar",
        name: "Male",
        stack: 3,
        color: "blue",
        data: [-8.98, -7.52, -6.65, -5.72, -4.85],
      },
      {
        type: "bar",
        name: "Female",
        stack: 3,
        color: "blue",
        data: [8.84, 7.42, 6.57, 5.68, 4.83],
      },
      {
        type: "bar",
        name: "Male",
        stack: 1,
        color: "orange",
        data: [-8.27, -7.27, -6.27, -5.27, -4.27],
      },
      {
        type: "bar",
        name: "Female",
        stack: 1,
        color: "orange",
        data: [8.27, 7.27, 6.27, 5.27, 4.27],
      },
    ],
  };

  const options2: Highcharts.Options = {
    xAxis: [
      {
        min: 0,
        max: 100,
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 100,
        // reversed: true,
      },
    ],
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "sliceAndDice",
        layoutStartingDirection: "horizontal",
        borderColor: "#FFFFFF",
        borderWidth: 4,
        dataLabels: {
          style: {
            textOutline: "none",
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: "20px",
            fontFamily: "tahoma",
          },
        },
        clip: false,

        data: [
          {
            name: "C",
            value: 15,
            color: "#56C5D0",
          },
          {
            name: "D",
            value: 15,
            color: "#56C5D0",
          },
          {
            name: "E",
            value: 10,
            color: "#56C5D0",
          },
          {
            name: "B",
            value: 20,
            color: "#56C5D0",
          },
          {
            name: "سیم کارت",
            value: 40,
            color: "#56C5D0",
          },
        ],
      },
    ],
    title: {
      text: "Highcharts Treemap",
    },
  };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      <div className="w-1/2">
        <HighchartsReact highcharts={Highcharts} options={options2} />
      </div>
      <div onClick={() => setPosition({ x: 1, y: 2 })}>SFSAF</div>
    </main>
  );
};

export default Chart5;
