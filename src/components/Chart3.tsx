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

const Chart3 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const options1: Highcharts.Options = {
    title: {
      text: "World Cloud Chart",
    },

    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          "<h5>{chartTitle}</h5>" +
          "<div>{chartSubtitle}</div>" +
          "<div>{chartLongdesc}</div>" +
          "<div>{viewTableButton}</div>",
      },
    },
    series: [
      {
        type: "wordcloud",
        data: [
          {
            name: "Lorem",
            weight: 3,
            color: "green",
          },
          {
            name: "Feed",
            weight: 1,
            color: "green",
          },
          {
            name: "NPM",
            weight: 2.5,
            color: "green",
          },
          {
            name: "Yarn",
            weight: 1.5,
            color: "red",
          },
          {
            name: "Ipsum",
            weight: 1.1,
            color: "red",
          },
          {
            name: "Dolor",
            weight: 1,
            color: "red",
          },
        ],
        name: "Occurrences",
      },
    ],
    tooltip: {
      headerFormat:
        '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
    },
    exporting: {
      buttons: {
        contextButton: {
          menuItems: ["downloadPNG"],
        },
      },
    },
  };

  const options2: Highcharts.Options = {
    title: {
      text: "Scatter Chart",
    },
    xAxis: {
      min: -0.6,
      max: 0.6,
      gridLineWidth: 1,
      lineWidth: 1,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      min: 0,
      max: 1.6,
      title: {
        text: "1000 metric tons (MT)",
      },
      gridLineWidth: 1,
      lineWidth: 1,
    },
    legend: {
      //   layout: "vertical",
      //   align: "center",
      //   verticalAlign: "top",
      //   borderWidth: 1,
    },
    plotOptions: {
      scatter: {
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "{point.x} cm, {point.y} kg",
        },
      },
    },
    series: [
      {
        type: "scatter",
        name: "Rightel",
        color: "rgba(223, 83, 83)",
        data: [[0.55, 0.55]],
        dataLabels: {
          enabled: true,
          align: "center",
          verticalAlign: "middle",
          formatter: function () {
            return this.series.name;
          },
          style: {
            fontSize: "10px",
            textOutline: "none",
            color: "white",
          },
        },
        marker: {
          radius: 20,
        },
      },
      {
        type: "scatter",
        name: "Hi",
        borderWidth: 2,
        borderColor: "rgba(223, 83, 83)",
        color: "rgba(223, 83, 83,.5)",
        data: [[0.52, 0.45]],
        marker: {
          radius: 20,
          symbol: "circle",
        },
      },
      {
        type: "bubble",
        name: "Male",
        color: "rgba(119, 152, 191, .5)",
        data: [[1.4, 0.6]],
        maxSize: 50,
        minSize: 50,
      },
    ],
  };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      <HighchartsReact highcharts={Highcharts} options={options1} />
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={options2}
      />
      <div onClick={() => setPosition({ x: 1, y: 2 })}>SFSAF</div>
    </main>
  );
};

export default Chart3;
