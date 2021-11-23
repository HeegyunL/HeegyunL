import NavItem from "@restart/ui/esm/NavItem";
import axios from "axios";
import { iteratorSymbol } from "immer/dist/internal";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ColumnBar from "../components/chart/columnBar";
import Layout from "../components/layout";

import partnerSaga from "../middleware/modules/partner";
import { RootState } from "../provider";
import { DiaryItemResponse } from "../api/diary";
import partnerApi, { PartnerItemResponse } from "../api/partner";

const Index = () => {
  const partners = useSelector((state: RootState) => state.partner);
  const diarys = useSelector((state: RootState) => state.diary);
  const reservations = useSelector((state: RootState) => state.reservation);

  const router = useRouter();
  const [data, setData] = useState<{
    ColumnBar: {
      category: string;
      amount: number;
    }[];
  }>();
  const getData = async () => {
    // const result = await axios.get<typeof data>();
    // "http://localhost:5050/sales-orders/stats?sd=1997-01-01&ed=1997-01-31"
    const sample: typeof data = {
      ColumnBar: [
        {
          category: "PT",
          amount: 21,
        },
        {
          category: "YOGA",
          amount: 15,
        },
        {
          category: "PILATES",
          amount: 15,
        },
        {
          category: "GYM",
          amount: 27,
        },
      ],
    };
    setData(sample);
    // setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div>
        <header></header>
        <body>
          <div className="mx-auto" style={{ width: "850px" }}>
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
                <table className="table" style={{ width: "40%" }}>
                  <thead className="text-center my-2">
                    <tr>
                      <th scope="col">헬스장 명</th>
                    </tr>
                  </thead>
                  {partners.data.map((item, index) => (
                    <tbody key={`partners-item-${index}`}>
                      <Link href={`/partner/information/detail/${item.id}}`}>
                        <tr className="text-center my-2">
                          <td>{item.gymName}</td>
                        </tr>
                      </Link>
                    </tbody>
                  ))}
                </table>
                {/* <h2 style={{ textAlign: "center" }}>제품별 매출액</h2> */}
                {data && <ColumnBar data={data.ColumnBar} />}
              </div>
            </div>
            <div className="mt-5">
              <h4 className=" float-start">예약 목록</h4>
              <Link href="/partner/reservation/list">
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
                    <tr key={`partners-item-${index}`}>
                      <td>{item.memberName}</td>
                      <td>{item.gymName}</td>
                      <td>{item.memberPhone}</td>
                      <td>{item.boughtService}</td>
                      <td>{item.trainerName}</td>
                    </tr>
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
