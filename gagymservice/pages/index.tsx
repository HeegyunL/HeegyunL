import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";

import { requestFetchPartner } from "../middleware/modules/partner";
import { AppDispatch, RootState } from "../provider";
import AmountsByCategories from "../components/chart/AmountsByCategories";
import { requestFetchPagingDiary } from "../middleware/modules/diary";
import { requestFetchPagingReservation } from "../middleware/modules/reservation";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import styles from "../styles/main.module.css";
// import Chart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Index = () => {
  const partners = useSelector((state: RootState) => state.partner);
  const diarys = useSelector((state: RootState) => state.diary);
  const reservations = useSelector((state: RootState) => state.reservation);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [data, setData] = useState<{
    options: ApexOptions;
    series: {
      name: string;
      data: number[];
    }[];
  }>();

  const getData = async () => {
    const result = await axios.get<
      {
        trainerName: string;
        amount: number;
      }[]
    >("http://52.79.120.222:8080/reservaion/amounts-by-categories?trainerName");

    const data = result.data;

    const options: ApexOptions = {
      title: {
        text: `강사별 예약 현황`,
      },
      xaxis: {
        // 배열 -> 배열, 요소의 개수가 동일함, 요소의 형식은 다름
        // map함수를 사용함
        // ["강남구", ... , "중랑구"]
        categories: data.map((item) => item.trainerName),
      },
    };
    const series = [{ name: "제품군", data: data.map((item) => item.amount) }];
    setData({ options, series });
  };

  useEffect(() => {
    if (!partners.isFetched) {
      dispatch(requestFetchPartner());
    }
    if (!diarys.isFetched) {
      dispatch(
        requestFetchPagingDiary({
          page: 0,
          size: 5,
        })
      );
    }
    if (!reservations.isFetched) {
      dispatch(
        requestFetchPagingReservation({
          page: 0,
          size: 5,
        })
      );
    }
    getData();
    console.log("----" + getData());
  }, [
    dispatch,
    partners.isFetched,
    diarys.isFetched,
    reservations.isFetched,
    reservations.pageSize,
  ]);

  return (
    <Layout>
      <body>
        <div className={styles.body}>
          <div className="justify-content-around">
            <div className={styles.flex}>
              <div
                style={{
                  width: "50%",
                  // marginRight: "5vw",
                }}
              >
                <table className={styles.table}>
                  <thead
                    className="text  "
                    style={{ borderTop: "none", borderBottom: "none" }}
                  >
                    <tr className={styles.span1}>
                      <th scope="col">헬스장 명</th>
                    </tr>
                  </thead>
                  {partners.data.map((item, index) => (
                    <tbody
                      key={index}
                      style={{ borderTop: "none", borderBottom: "none" }}
                    >
                      <Link href={`/partner/information/detail/${item.id}`}>
                        <tr style={{ borderTop: "none", borderBottom: "none" }}>
                          <td className={styles.divspan}>
                            <span className={styles.span2}>{item.gymName}</span>
                          </td>
                        </tr>
                      </Link>
                    </tbody>
                  ))}
                </table>
              </div>
              <div>
                {data && (
                  <Chart
                    options={data?.options}
                    series={data?.series}
                    type="bar"
                    className={styles.Chart}
                    height="350px"
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.flex} style={{ width: "80%" }}>
            {/* 예약목록 */}
            <div className="mt-5" style={{ width: "100%" }}>
              <h4 className=" float-start">예약 목록</h4>
              <Link href={`/partner/reservation/list`}>
                <a>
                  <button className="btn btn-primary float-end btn-sm">
                    목록 보기
                  </button>
                </a>
              </Link>
              <table className="table mx-auto table-hover">
                <thead>
                  <tr>
                    <th className="text-nowrap" scope="col">
                      이름
                    </th>
                    <th className="text-nowrap" scope="col">
                      희망운영권
                    </th>
                    <th className="text-nowrap" scope="col">
                      희망 강사
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.data.map((item, index) => (
                    <Link
                      href={`/partner/reservation/detail/${item.id}`}
                      key={`partners-item-${index}`}
                    >
                      <tr key={`partners-item-${index}`}>
                        <td className="text-nowrap">{item.memberName}</td>
                        <td>{item.boughtService}</td>
                        <td>{item.trainerName}</td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pt일지 */}
            <div className="mt-5 " style={{ width: "100%", marginLeft: "3vw" }}>
              <h4 className=" float-start">PT 일지</h4>
              <Link href="/partner/ptDiary/list">
                <a>
                  <button className="btn btn-primary float-end btn-sm">
                    목록 보기
                  </button>
                </a>
              </Link>
              <table className="table mx-auto table-hover">
                <thead>
                  <tr>
                    <th className="text-nowrap" scope="col">
                      이름
                    </th>
                    <th className="text-nowrap" scope="col">
                      문의사항
                    </th>
                  </tr>
                </thead>
                {diarys.data.map((item, index) => (
                  <tbody key={`partners-item-${index}`}>
                    <Link href={`/partner/ptDiary/detail/${item.id}`}>
                      <tr>
                        <td>{item.memberName}</td>
                        <td>{item.diaryRequest}</td>
                      </tr>
                    </Link>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default Index;
