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

const Index = () => {
  const partners = useSelector((state: RootState) => state.partner);
  const diarys = useSelector((state: RootState) => state.diary);
  const reservations = useSelector((state: RootState) => state.reservation);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [data, setData] = useState<{
    amountsByCategories: {
      trainerName: string;
      amount: number;
    }[];
  }>();
  const getData = async () => {
    const result = await axios.get<typeof data>(
      "http://52.79.120.222:8080/reservaion/amounts-by-categories?trainerName"
    );
    console.log(result.data);
    setData(result.data);
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
      <div>
        <body>
          <div className="mx-auto" style={{ width: "900px" }}>
            <div className="justify-content-md-end">
              {/* <h4 className="mb-3 float-start">헬스장 정보</h4> */}
              <Link href="/partner/information/detail">
                <a>
                  {/* <button className="btn btn-primary float-end btn-sm">
                    상세 보기
                  </button> */}
                </a>
              </Link>
              <div className="d-flex">
                <table
                  className="table"
                  style={{ width: "40%", height: "300px" }}
                >
                  <thead className="text-center my-2">
                    <tr>
                      <th scope="col">헬스장 명</th>
                    </tr>
                  </thead>
                  {partners.data.map((item, index) => (
                    <tbody key={`partners-item-${index}`}>
                      <Link href={`/partner/information/detail/${item.id}`}>
                        <tr className="text-center my-2">
                          <td>{item.gymName}</td>
                        </tr>
                      </Link>
                    </tbody>
                  ))}
                </table>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "1000px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <h2 style={{ textAlign: "center" }}>제품별 매출액</h2>
                    {data && (
                      <AmountsByCategories data={data.amountsByCategories} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className=" float-start">예약 목록</h4>
              <Link href={`/partner/reservation/list`}>
                <a>
                  <button className="btn btn-primary float-end btn-sm">
                    목록 보기
                  </button>
                </a>
              </Link>
              <table className="table mx-auto">
                <thead>
                  <tr>
                    <th scope="col">이름</th>
                    <th scope="col">헬스장명</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">희망운영권</th>
                    <th scope="col">희망 강사</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.data.map((item, index) => (
                    <Link
                      href={`/partner/reservation/detail/${item.id}`}
                      key={`partners-item-${index}`}
                    >
                      <tr key={`partners-item-${index}`}>
                        <td>{item.memberName}</td>
                        <td>{item.gymName}</td>
                        <td>{item.memberPhone}</td>
                        <td>{item.boughtService}</td>
                        <td>{item.trainerName}</td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <h4 className=" float-start">PT 일지</h4>
              <Link href="/partner/ptDiary/list">
                <a>
                  <button className="btn btn-primary float-end btn-sm">
                    목록 보기
                  </button>
                </a>
              </Link>
              <table className="table mx-auto">
                <thead>
                  <tr>
                    <th scope="col">이름</th>
                    <th scope="col">식단</th>
                    <th scope="col">운동</th>
                    <th scope="col">문의사항</th>
                    <th scope="col">피드백</th>
                  </tr>
                </thead>
                {diarys.data.map((item, index) => (
                  <tbody key={`partners-item-${index}`}>
                    <Link href={`/partner/ptDiary/detail/${item.id}`}>
                      <tr>
                        <td>{item.memberName}</td>
                        <td>{item.diaryMorning}</td>
                        <td>{item.diaryRoutine}</td>
                        <td>{item.diaryRequest}</td>
                        <td>{item.trainerFeedback}</td>
                      </tr>
                    </Link>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </body>
      </div>
    </Layout>
  );
};

export default Index;
