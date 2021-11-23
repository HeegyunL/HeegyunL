import { ApexOptions } from "apexcharts";
import { dataUrlToFile } from "../../lib/string";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface Prop {
  data: {
    category: string;
    amount: number;
  }[];
}
const ColumnBar = ({ data }: Prop) => {
  const chartData: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  } = {
    series: [{ name: "제품군", data: data.map((item) => item.amount) }],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data.map((item) => item.category),
      },
    },
  };
  return (
    <div>
      {chartData && (
        <Chart
          style={{ width: "150%", height: "300px" }}
          className="ms-4"
          options={chartData.options}
          series={chartData.series}
          type="bar"
        />
      )}
    </div>
  );
};

export default ColumnBar;
