import { useRouter } from "next/router";
import React, { MutableRefObject, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Layout from "../../../../components/layout";
import {
  requestFetchReservation,
  requestFetchReservationItem,
  requestModifyReservation,
  requestRemoveReservation,
} from "../../../../middleware/modules/reservation";
import { AppDispatch, RootState } from "../../../../provider";
import reservation from "../../../../provider/modules/reservation";

const Reservationdetail = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const id = router.query.id as string;

  // const id = router.query.id as string;

  const reservationItem = useSelector((state: RootState) =>
    state.reservation.data.find((item) => item.id === +id)
  );

  const isRemoveCompleted = useSelector(
    (state: RootState) => state.reservation.isRemoveCompleted
  );
  const handleDeleteClick = () => {
    dispatch(requestRemoveReservation(+id));
    router.push(`/partner/reservation/list`);
  };
  useEffect(() => {
    isRemoveCompleted && router.push(`/partner/reservation/list`);
  }, [dispatch, isRemoveCompleted, router]);
  return (
    <Layout>
      {reservationItem && (
        <body className="bg-light">
          <div className="mx-auto mt-5" style={{ width: "60vw" }}>
            <h4 className="mt-5 text-center"> 예약 내역</h4>
            <div className="d-flex mt-5">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                헬스장명
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {" "}
                {reservationItem.gymName}
              </p>
            </div>
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                이름
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {" "}
                {reservationItem.memberName}
              </p>
            </div>
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                연락처
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {" "}
                {reservationItem.memberPhone}
              </p>
            </div>
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                희망 이용권
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {" "}
                {reservationItem.boughtService}
              </p>
            </div>
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                희망 강사
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {reservationItem.trainerName}
              </p>
            </div>
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                문의 사항
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {" "}
                {reservationItem.memberRequest}
              </p>
            </div>
            <div className="d-grid mt-3  d-md-flex justify-content-end">
              <button
                className="btn btn-primary mb-3 ms-3 "
                type="button"
                onClick={() => {
                  handleDeleteClick();
                }}
              >
                삭제
              </button>
              <button
                className="btn btn-primary ms-3 mb-3"
                type="button"
                onClick={() => {
                  router.push(`/partner/reservation/${reservationItem?.id}`);
                }}
              >
                목록
              </button>
            </div>
          </div>
        </body>
      )}
    </Layout>
  );
};
export default Reservationdetail;
