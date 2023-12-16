"use client";

import { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
// } from "chart.js";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Annotations from "highcharts/modules/annotations";
import highchartsAccessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";

if (typeof window !== `undefined`) {
  Exporting(Highcharts);
  Annotations(Highcharts);
  highchartsAccessibility(Highcharts);
}

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   TimeScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const LineChartWithComments = () => {
//     const [comments, setComments] = useState([]);

//     const handleChartClick = (elements) => {
//         console.log(elements);

//         // if (elements && elements.length > 0) {
//         //     const element = elements[0];
//         //     const datasetIndex = element._datasetIndex;
//         //     const index = element._index;

//         //     const xValue = element.chart.data.labels[index];
//         //     const yValue =
//         //         element.chart.data.datasets[datasetIndex].data[index];

//         //     // Open a modal or form to input and save the comment
//         //     const comment = prompt("Add a comment:");
//         //     if (comment) {
//         //         // Update state or data with the comment
//         //         const newComment = { x: xValue, y: yValue, text: comment };
//         //         setComments((prevComments) => [...prevComments, newComment]);
//         //     }
//         // }
//     };

//     const chartData = {
//         labels: ["January", "February", "March", "April", "May"],
//         datasets: [
//             {
//                 label: "My Dataset",
//                 data: [10, 20, 30, 40, 50],
//             },
//         ],
//     };

//     const chartOptions = {
//         onClick: (_, elements) => handleChartClick(elements),
//         // other chart options...
//     };

//     return (
//         <div>
//             <Line data={chartData} options={chartOptions} />
//             {/* Render comments on the chart */}
//             {comments.map((comment, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         position: "absolute",
//                         left: comment.x,
//                         top: comment.y,
//                     }}
//                 >
//                     {comment.text}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default LineChartWithComments;

const Chart = () => {
  // const [xValue, setXValue] = useState(null);
  // const [yValue, setYValue] = useState(null);
  const [commentModal, setCommentModal] = useState(false);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  console.log(position);

  useEffect(() => {}, []);

  // const chartRef: any = useRef();

  // const labels = [100, 200, 300, 400, 500, 600, 700];

  // const data: ChartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Sajjad",
  //       fill: false,
  //       tension: 0.3,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [10, 50, 68, 45, 15, 25, 60],
  //       spanGaps: false,
  //     },
  //     {
  //       label: "Ali",
  //       data: [60, 30, 40, 65, 20, 35, 50],
  //       spanGaps: false,
  //       fill: false,
  //       tension: 0.3,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "red",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "red",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "red",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //     },
  //   ],
  // };

  // const options: ChartOptions = {
  //   onClick: function (event, elementsAtEvent) {
  //     // console.log(event, elementsAtEvent, chartRef?.current);
  //     let valueX1 = null,
  //       valueY1 = null;
  //     // console.log(event);
  //     for (let scaleName in chartRef?.current.scales) {
  //       let scale = chartRef?.current.scales[scaleName];
  //       if (!scale.isHorizontal()) {
  //         valueY1 = scale.getValueForPixel(event.y);
  //       } else {
  //         valueX1 = scale.getValueForPixel(event.x);
  //       }
  //     }
  //     setXValue(valueX1);
  //     setYValue(valueY1);
  //     console.log(event.x, valueX1, null, event.y, valueY1);
  //   },
  //   responsive: true,
  //   plugins: {
  //     // tooltip: {
  //     //     enabled: false,
  //     //     intersect: false,
  //     //     callbacks: {
  //     //         label: function (context) {
  //     //             let label = data.labels[context.datasetIndex];
  //     //             return (
  //     //                 label +
  //     //                 ",  " +
  //     //                 context.parsed.x +
  //     //                 ",  " +
  //     //                 context.parsed.y +
  //     //                 "<br />" +
  //     //                 "hi"
  //     //             );
  //     //         },
  //     //     },
  //     //     external: function (context) {
  //     //         let tooltipModel = context.tooltip;
  //     //         // Tooltip Element
  //     //         let tooltipEl = document.getElementById("chartjs-tooltip");

  //     //         // Create element on first render
  //     //         if (!tooltipEl) {
  //     //             tooltipEl = document.createElement("div");
  //     //             tooltipEl.id = "chartjs-tooltip";
  //     //             tooltipEl.innerHTML = "<table></table>";
  //     //             // tooltipEl.classList.add("scrollbar");
  //     //             document.body.appendChild(tooltipEl);
  //     //         }

  //     //         function getBody(bodyItem) {
  //     //             return bodyItem.lines;
  //     //         }

  //     //         // Set Text
  //     //         if (tooltipModel.body) {
  //     //             let titleLines = tooltipModel.title || [];
  //     //             let bodyLines = tooltipModel.body.map(getBody);

  //     //             let innerHtml = "<thead>";

  //     //             titleLines.forEach(function (title) {
  //     //                 innerHtml += "<tr><th>" + title + "</th></tr>";
  //     //             });
  //     //             innerHtml += "</thead><tbody >";

  //     //             bodyLines.forEach(function (body, i) {
  //     //                 let colors = tooltipModel.labelColors[i];
  //     //                 let style = "background:" + colors.backgroundColor;
  //     //                 style += "; border-color:" + colors.borderColor;
  //     //                 style += "; border-width: 2px !important";
  //     //                 style += "; width: 10px !important";
  //     //                 style += "; height: 10px !important";
  //     //                 style += "; display: inline-block !important";
  //     //                 style += "; margin-right: 3px !important";
  //     //                 let box = `<span style="${style}"></span>`;
  //     //                 innerHtml += `<tr><td>${box}${body}</td></tr>`;
  //     //             });
  //     //             innerHtml += "</tbody>";

  //     //             let tableRoot = tooltipEl.querySelector("table");
  //     //             tableRoot.innerHTML = innerHtml;
  //     //         }

  //     //         // `this` will be the overall tooltip
  //     //         let position = this.chart.canvas.getBoundingClientRect();

  //     //         // Display, position, and set styles for font
  //     //         tooltipEl.style.position = "absolute";
  //     //         tooltipEl.style.left =
  //     //             position.left +
  //     //             window.pageXOffset +
  //     //             tooltipModel.caretX +
  //     //             "px";
  //     //         tooltipEl.style.top =
  //     //             position.top +
  //     //             window.pageYOffset +
  //     //             tooltipModel.caretY +
  //     //             "px";
  //     //         tooltipEl.style.padding =
  //     //             tooltipModel.yPadding +
  //     //             "px " +
  //     //             tooltipModel.xPadding +
  //     //             "px";
  //     //         // tooltipEl.style.pointerEvents = 'none'; // Use when need to stop mouse events such as Onhover and Scrolling
  //     //         tooltipEl.style.border = "2px solid blue";
  //     //         tooltipEl.style.borderColor = "blue";
  //     //         tooltipEl.style.borderRadius = "4px";
  //     //         tooltipEl.style.backgroundColor = "white";
  //     //         tooltipEl.style.maxHeight = "100px";
  //     //         tooltipEl.style.overflowY = "auto";
  //     //         tooltipEl.style.scrollBehavior = "smooth";
  //     //     },
  //     // },
  //     legend: {
  //       position: "bottom",
  //       align: "start",
  //     },
  //     annotation: {
  //       annotations: {
  //         point1: {
  //           type: "point",
  //           xValue: xValue,
  //           yValue: yValue,
  //           backgroundColor: "rgba(75,192,192,0.25)",
  //           borderWidth: 2,
  //           borderColor: "red",
  //           radius: 7,
  //         },
  //       },
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // };

  const options1: Highcharts.Options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        type: "spline",
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

    chart: {
      events: {
        click: function (event: any) {
          setPosition({
            x: Number(Highcharts.numberFormat(event.xAxis[0].value, 2)),
            y: Number(Highcharts.dateFormat(event.yAxis[0].value, 2)),
          });
        },
      },
    },

    annotations: [
      {
        shapeOptions: {
          type: "path",
          dashStyle: "Solid",
          strokeWidth: 3,
          stroke: "red",
          fill: "red",
        },
        shapes: [
          {
            type: "path",
            points: [
              {
                x: 1,
                y: 3,
                xAxis: 0,
                yAxis: 0,
              },
              {
                x: 2,
                y: 5,
                xAxis: 0,
                yAxis: 0,
              },
            ],
          },
        ],
      },
      {
        events: {
          click: function (event: any) {
            event.stopPropagation();
          },
        },
        labels: [
          {
            point: {
              x: position.x,
              y: position.y,
              xAxis: 0,
              yAxis: 0,
            },
            text: "x: {x}<br/>y: {y}",
          },
        ],
        labelOptions: {
          // x: 40,
          // y: -10,
          backgroundColor: "rgba(247, 247, 247, 0.85)",
          borderWidth: 1,
          shadow: true,
          padding: 8,
          distance: 8,
          borderRadius: 3,
          borderColor: "blue",
          style: {
            color: "#333333",
            fontSize: "12px",
            whiteSpace: "nowrap",
          },
        },
      },
    ],
  };

  const options2: Highcharts.Options = {
    title: {
      text: "Corn vs wheat estimated production for 2020",
      align: "left",
    },
    xAxis: {
      categories: ["USA", "China", "Brazil", "EU", "India", "Russia"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
      gridLineWidth: 1,
      lineWidth: 1,
    },
    yAxis: {
      min: 0,
      title: {
        text: "1000 metric tons (MT)",
      },
      gridLineWidth: 0,
      lineWidth: 1,
    },
    plotOptions: {
      column: {
        pointPadding: 0.3,
        borderWidth: 0,
      },
    },
    series: [
      {
        point: {
          events: {
            click: function () {
              alert("Category: " + this.category + ", value: " + this.y);
            },
          },
        },
        name: "Corn",
        data: [406292, 260000, 107000, 68300, 27500, 14500],
        type: "column",
        color: "red",
      },
      {
        name: "Wheat",
        data: [51086, 136000, 5500, 141000, 107180, 77000],
        type: "column",
        color: "blue",
      },
    ],
  };

  return (
    <main className="w-full p-5 mt-10 flex flex-col gap-y-5">
      {/* <Line options={options} ref={chartRef} data={data} /> */}
      <HighchartsReact highcharts={Highcharts} options={options1} />
      <HighchartsReact highcharts={Highcharts} options={options2} />
    </main>
  );
};

export default Chart;

// export default function App() {
//     const chartRef: any = useRef();

//     function randomScalingFactor() {
//         return Math.round(Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1));
//     }

//     function randomColorFactor() {
//         return Math.round(Math.random() * 255);
//     }

//     function randomColor(opacity) {
//         return (
//             "rgba(" +
//             randomColorFactor() +
//             "," +
//             randomColorFactor() +
//             "," +
//             randomColorFactor() +
//             "," +
//             (opacity || ".3") +
//             ")"
//         );
//     }

//     function newDate(days) {
//         return moment().add(days, "d").toDate();
//     }

//     function newDateString(days) {
//         return moment().add(days, "d").format();
//     }

//     var config = {
//         data: {
//             datasets: [
//                 {
//                     label: "Dataset with string point data",
//                     data: [
//                         {
//                             x: newDateString(0),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDateString(2),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDateString(4),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDateString(5),
//                             y: randomScalingFactor(),
//                         },
//                     ],
//                     fill: false,
//                 },
//                 {
//                     label: "Dataset with date object point data",
//                     data: [
//                         {
//                             x: newDate(0),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDate(2),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDate(4),
//                             y: randomScalingFactor(),
//                         },
//                         {
//                             x: newDate(5),
//                             y: randomScalingFactor(),
//                         },
//                     ],
//                     fill: false,
//                 },
//             ],
//         },
//         options: {
//             onClick: function (event, elementsAtEvent) {
//                 // console.log(event, elementsAtEvent, chartRef?.current);
//                 let valueX = null,
//                     valueY = null;
//                 for (let scaleName in chartRef?.current.scales) {
//                     let scale = chartRef?.current.scales[scaleName];
//                     // console.log(event);

//                     if (scale.axis === "x") {
//                         valueX = scale.getValueForPixel(event.x);
//                     } else {
//                         valueY = scale.getValueForPixel(event.y);
//                     }
//                 }
//                 console.log(event.offsetX, valueX, null, event.offsetY, valueY);
//             },
//             responsive: true,
//             title: {
//                 display: true,
//                 text: "Chart.js Time Point Data",
//             },
//             scales: {
//                 xAxes: {
//                     type: "time",
//                     display: true,
//                     scaleLabel: {
//                         display: true,
//                         labelString: "Date",
//                     },
//                 },

//                 yAxes: {
//                     display: true,
//                     scaleLabel: {
//                         display: true,
//                         labelString: "value",
//                     },
//                 },
//             },
//         },
//     };

//     config.data.datasets.forEach(function (dataset) {
//         dataset.borderColor = randomColor(0.4);
//         dataset.backgroundColor = randomColor(0.5);
//         dataset.pointBorderColor = randomColor(0.7);
//         dataset.pointBackgroundColor = randomColor(0.5);
//         dataset.pointBorderWidth = 1;
//     });

//     return (
//         <main className="w-full md:w-1/2 h-1/2 p-5 mt-10">
//             <Line options={config.options} ref={chartRef} data={config.data} />
//         </main>
//     );
// }
