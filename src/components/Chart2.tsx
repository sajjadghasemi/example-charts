"use client";

import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/highmaps";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import Annotations from "highcharts/modules/annotations";
import highchartsAccessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import highchartsMap from "highcharts/modules/map";
import iranMap from "@highcharts/map-collection/countries/ir/ir-all.topo.json";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  Annotations(Highcharts);
  highchartsAccessibility(Highcharts);
  ExportData(Highcharts);
  highchartsMap(Highcharts);
}

const Chart2 = () => {
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  function getPersianCityName(key: string): string {
    const cityNames: { [key: string]: string } = {
      Alborz: "البرز",
      Ardebil: "اردبیل",
      Bushehr: "بوشهر",
      "Chahar Mahall and Bakhtiari": "چهارمحال و بختیاری",
      "East Azarbaijan": "آذربایجان شرقی",
      Esfahan: "اصفهان",
      Fars: "فارس",
      Gilan: "گیلان",
      Golestan: "گلستان",
      Hamadan: "همدان",
      Hormozgan: "هرمزگان",
      Ilam: "ایلام",
      Kerman: "کرمان",
      Kermanshah: "کرمانشاه",
      Khuzestan: "خوزستان",
      "Kohgiluyeh and Buyer Ahmad": "کهگیلویه و بویر احمد",
      Kordestan: "کردستان",
      Lorestan: "لرستان",
      Markazi: "مرکزی",
      Mazandaran: "مازندران",
      "North Khorasan": "خراسان شمالی",
      Qazvin: "قزوین",
      Qom: "قم",
      "Razavi Khorasan": "خراسان رضوی",
      Semnan: "سمنان",
      "Sistan and Baluchestan": "سیستان و بلوچستان",
      "South Khorasan": "خراسان جنوبی",
      Tehran: "تهران",
      "West Azarbaijan": "آذربایجان غربی",
      Yazd: "یزد",
      Zanjan: "زنجان",
    };

    return cityNames[key] || key;
  }

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
      gridLineWidth: 2,
    },

    yAxis: {
      gridLineInterpolation: "polygon",
      lineWidth: 0,
      gridLineWidth: 2,
      min: 0,
      borderWidth: 4,
      gridLineColor: "rgba(0,0,0,0.5)",
    },

    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
    },

    legend: {
      align: "left",
      verticalAlign: "middle",
      layout: "vertical",
      itemMarginBottom: 10,
      itemStyle: {
        fontFamily: "tahoma",
        fontSize: "24",
        fontWeight: "bold",
      },
    },

    series: [
      {
        type: "area",
        name: "همران اول",
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: "on",
        fillOpacity: 0.15,
        color: "#56C5D0",
      },
      {
        type: "area",
        name: "رایتل",
        data: [50000, 39000, 42000, 31000, 26000, 40000],
        pointPlacement: "on",
        fillOpacity: 0.15,
        color: "#B72E8B",
      },
      {
        type: "area",
        name: "ایرانسل",
        data: [25000, 64440, 33000, 90000, 56000, 60000],
        pointPlacement: "on",
        fillOpacity: 0.15,
        color: "#FAB823",
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

  const options2: HighchartsMap.Options = {
    chart: {
      map: iranMap,
    },

    title: {
      text: "",
    },

    colorAxis: {
      showInLegend: false,
    },

    tooltip: {
      formatter: function () {
        if (this.key) {
          return `نام شهر: ${getPersianCityName(this.key)}<br>مقدار: ${
            this.point.value
          }`;
        }
      },
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "black",
      style: {
        fontFamily: "tahoma",
        width: 2000,
      },
    },

    series: [
      {
        borderWidth: 1.5,
        borderColor: "white",
        type: "map",
        data: [
          { "hc-key": "ir-hg", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-bs", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-kb", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-fa", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-es", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-sm", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-go", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-mn", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-th", value: 20, color: "#FAB823" },
          { "hc-key": "ir-mk", value: 10, color: "#FAB823" },
          { "hc-key": "ir-ya", value: 0, color: "#FAB823" },
          { "hc-key": "ir-cm", value: 0, color: "#FAB823" },
          { "hc-key": "ir-kz", value: 0, color: "#FAB823" },
          { "hc-key": "ir-lo", value: 0, color: "#FAB823" },
          { "hc-key": "ir-il", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-ar", value: 0, color: "#FAB823" },
          { "hc-key": "ir-qm", value: 0, color: "#FAB823" },
          { "hc-key": "ir-hd", value: 0, color: "#FAB823" },
          { "hc-key": "ir-za", value: 0, color: "#FAB823" },
          { "hc-key": "ir-qz", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-wa", value: 0, color: "#FAB823" },
          { "hc-key": "ir-ea", value: 0, color: "#FAB823" },
          { "hc-key": "ir-bk", value: 0, color: "#FAB823" },
          { "hc-key": "ir-gi", value: 0, color: "#B72E8B" },
          { "hc-key": "ir-kd", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-kj", value: 0, color: "#FAB823" },
          { "hc-key": "ir-kv", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-ks", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-sb", value: 0, color: "#56C5D0" },
          { "hc-key": "ir-ke", value: 0, color: "#FAB823" },
          { "hc-key": "ir-al", value: 0, color: "#56C5D0" },
        ],
        name: "Iran",
        showInLegend: false,
        cursor: "pointer",
        states: {
          hover: {
            color: "rgba(0,0,0,0.1)",
          },
        },
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

export default Chart2;
