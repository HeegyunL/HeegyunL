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
      <body className="bg-light ">
        <div className="">
          <div className="row">
            <div className="col">
              {partners.data.map((item, index) => (
                <Link
                  href={`/partner/information/detail/${item.id}`}
                  key={index}
                >
                  <div key={index}>
                    <div
                      className="card mb-3 bg-light"
                      style={{
                        border: 0,
                        outline: 0,
                      }}
                    >
                      <div className="row g-0 mt-5">
                        <div className="col-md-4">
                          <img
                            src={item.gymPhoto}
                            alt={item.fileName}
                            className="img-fluid rounded-start"
                            style={{
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderColor: "gray",
                              boxShadow: "2px 3px 5px 0px",
                            }}
                          ></img>
                        </div>
                        <div className="col-md-6 ms-3">
                          <div className="card-body ">
                            <h5 className="card-title fs-3">{item.gymName}</h5>
                            <p className="card-text fs-5">
                              <p>
                                {item.gymLocateSi} / {item.gymLocateGunGu}
                              </p>

                              <table className="w-100">
                                <thead>
                                  <th>
                                    <td className="text-danger fs-4">Price</td>
                                  </th>
                                  <tr>
                                    <td>Month</td>
                                    <td>3Month</td>
                                    <td>Day</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className=" border-top">
                                    <td>{item.gymMonthPrice}won</td>
                                    <td>{item.gym3MonthPrice}won</td>
                                    <td>{item.gym1DayPrice}won</td>
                                  </tr>
                                </tbody>
                              </table>
                            </p>
                            <p className="card-text">
                              <small className="text-muted fs-5">
                                {item.gymPhoneNum}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {data && (
              <Chart
                options={data?.options}
                series={data?.series}
                type="bar"
                className="col mt-4"
                height="350px"
              />
            )}
          </div>
          <div className="d-flex" style={{ width: "100%" }}>
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
