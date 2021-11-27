import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import Chart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { ApexOptions } from "apexcharts";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface Prop {
  data: {
    trainerName: string;
    amount: number;
  }[];
}

const AmountsByCategories = ({ data }: Prop) => {
  // 차트 데이터 설정
  const chartData: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  } = {
    // [{name: "제품군", data: [30330, 7113 ...]}]
    series: [{ name: "제품군", data: data && data.map((item) => item.amount) }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        // categories: ["beverages", "condiments" ...]
        categories: data && data.map((item) => item.trainerName),
      },
      // y축 형식 지정
      // yaxis: {
      //   labels: {
      //     formatter: function (val: number) {
      //       return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //     },
      //   },
      // },
    },
  };

  return (
    <div>
      {chartData && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="350px"
        />
      )}
    </div>
  );
};

export default AmountsByCategories;
