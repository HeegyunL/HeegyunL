import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import { requestFetchPagingReservation } from "../../../middleware/modules/reservation";
import { AppDispatch, RootState } from "../../../provider";

const List = () => {
  const reservation = useSelector((state: RootState) => state.reservation);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!reservation.isFetched) {
      const reservationPageSize = localStorage.getItem("reservation_page_size");

      dispatch(
        requestFetchPagingReservation({
          page: 0,
          size: reservationPageSize
            ? +reservationPageSize
            : reservation.pageSize,
        })
      );
    }
  }, [dispatch, reservation.isFetched, reservation.pageSize]);

  const handlePageChanged = (page: number) => {
    console.log("--page: " + page);
    dispatch(
      requestFetchPagingReservation({
        page,
        size: reservation.pageSize,
      })
    );
  };

  const handlePageSizeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    dispatch(
      requestFetchPagingReservation({
        page: reservation.page,
        size: +e.currentTarget.value,
      })
    );
  };

  return (
    <Layout>
      <div>
        <body>
          <div className=" mt-5" style={{ width: "100%", marginLeft: "0px" }}>
            <h4 className=" float-start">예약 정보</h4>
            <div className="d-flex justify-content-end align-items-center">
              <select
                className="form-select form-select-sm  "
                style={{ width: "55px", height: "30px" }}
                onChange={(e) => {
                  handlePageSizeChanged(e);
                }}
              >
                {[3, 5, 10, 30].map((size, index) => (
                  <option
                    value={size}
                    selected={reservation.pageSize === size}
                    key={index}
                  >
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <table
              className="table table-hover mt-4"
              style={{ width: "1025px" }}
            >
              <thead>
                <tr>
                  <th scope="col">이름</th>
                  <th scope="col">헬스장명</th>
                  <th scope="col">전화번호</th>
                  <th scope="col">희망 운영권</th>
                  <th scope="col">희망 강사</th>
                </tr>
              </thead>
              <tbody>
                {reservation.data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      router.push(`/partner/reservation/detail/${item.id}`);
                    }}
                  >
                    <td style={{ cursor: "pointer", color: "rgb(3, 48, 129)" }}>
                      {item.memberName}
                    </td>
                    <td>{item.gymName}</td>
                    <td>{item.memberPhone}</td>
                    <td style={{ cursor: "pointer", color: "red" }}>
                      {item.boughtService}
                    </td>
                    <td>{item.trainerName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!reservation.isLast && (
              <div className="d-flex justify-content-center mt-4">
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault(); // 기본 동작 방지
                    dispatch(
                      requestFetchPagingReservation({
                        page: reservation.page + 1,
                        size: reservation.pageSize,
                      })
                    );
                  }}
                  className="link-secondary fs-6 text-nowrap"
                >
                  더보기
                </a>
              </div>
            )}
          </div>
        </body>
      </div>
    </Layout>
  );
};
export default List;
