import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/footer";
import Layout from "../../../components/layout";
import { requestFetchPartner } from "../../../middleware/modules/partner";
import { AppDispatch, RootState } from "../../../provider";
// import styles from "../../../styles/"
import Chart from "react-apexcharts";
import { stringify } from "querystring";
import columnBar from "../../../components/chart/AmountsByCategories";
import ColumnBar from "../../../components/chart/AmountsByCategories";
import axios from "axios";

const List = () => {
  const [data, setData] = useState<{
    ColumnBar: {
      category: string;
      amount: number;
    }[];
  }>();
  // const getData = async () => {
  //   const result = await axios.get<typeof data>(
  //     "http://localhost:5050/sales-orders/stats?sd=1997-01-01&ed=1997-01-31"
  //   );

  //   setData(result.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const partner = useSelector((state: RootState) => state.partner);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!partner.isFetched) {
      dispatch(requestFetchPartner());
    }
  }, [dispatch, partner.isFetched]);

  return (
    <Layout>
      <div>
        <div style={{ width: "50%" }}>
          {/* <h2 style={{ textAlign: "center" }}>제품별 매출액</h2>
          {data && <ColumnBar data={data.ColumnBar} />} */}
        </div>
        <body>
          <div className=" mt-4" style={{ width: "80%", marginLeft: "0px" }}>
            <h4 className=" float-start">헬스장 정보</h4>
            <table className="table" style={{ width: "1025px" }}>
              <thead>
                <tr>
                  <th scope="col">헬스장명</th>
                  <th scope="col">지역</th>
                  <th scope="col">전화번호</th>
                  <th scope="col">운영 시간</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {partner.data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      router.push(`/partner/information/detail/${item.id}`);
                    }}
                  >
                    <td>{item.gymName}</td>
                    <td>
                      {item.gymLocateSi}
                      {item.gymLocateGunGu}
                    </td>
                    <td>{item.gymPhoneNum}</td>
                    <td>{item.gymTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </body>
      </div>
    </Layout>
  );
};
export default List;
