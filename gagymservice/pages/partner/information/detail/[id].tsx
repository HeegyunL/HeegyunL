import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Footer from "../../../../components/footer";
import Layout from "../../../../components/layout";
import {
  requestFetchPartner,
  requestFetchPartnerItem,
  requestRemovePartner,
} from "../../../../middleware/modules/partner";
import { requestFetchTrainer } from "../../../../middleware/modules/trainer";
import { AppDispatch, RootState, store } from "../../../../provider";

const PartnerDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const id = router.query.id as string;
  console.log(id);

  let partners = useSelector((state: RootState) =>
    state.partner.data.find((item) => item.id === +id)
  );
  if (id) {
    // redux에 데이터가 없으면
    if (!partners) {
      // 1건에 데이터를 가져와 store에 추가함
      dispatch(requestFetchPartnerItem(+id));
    }
  }
  const [modalOpen, setModalOpen] = React.useState(false);
  const trainer = useSelector((state: RootState) => state.trainer);

  const isRemoveCompleted = useSelector(
    (state: RootState) => state.partner.isRemoveCompleted
  );

  const handleDeleteClick = () => {
    dispatch(requestRemovePartner(+id));
    router.push(`/partner/information/list`);
  };
  useEffect(() => {
    dispatch(requestFetchTrainer());
    isRemoveCompleted && router.push(`/partner/information/list`);
  }, [dispatch, trainer.isFetched, isRemoveCompleted, router]);

  const trainers = trainer.data.filter(
    (item) => item.gymCode == partners?.gymCoNum
  );
  console.log(trainers);

  return (
    <Layout>
      <body>
        {partners && (
          <div className="mx-auto mt-5 bg-light" style={{ width: "" }}>
            {/* 헬스장 사진 */}
            <div className="row p-4 ">
              <img
                className="col"
                src={partners.gymPhoto}
                alt={partners.fileName}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "gray",
                  boxShadow: "2px 3px 5px 0px",
                  maxWidth: "20vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div className="col-6">
                {/* 헬스장 명 */}
                <div className=" mt-3">
                  <p className=" text-nowrap" style={{ width: "" }}>
                    헬스장 명
                  </p>
                  <h4
                    className=""
                    style={{
                      height: "5vh",
                    }}
                  >
                    {partners.gymName}
                  </h4>
                </div>
                {/* 지역 */}
                <div className=" mt-3">
                  <p className="  text-nowrap" style={{ width: "" }}>
                    지역
                  </p>
                  <h4
                    className=""
                    style={{
                      height: "5vh",
                    }}
                  >
                    {partners.gymLocateSi} {partners.gymLocateGunGu}
                  </h4>
                </div>
                {/* 전화번호 */}
                <div className=" mt-3">
                  <p className=" text-nowrap " style={{ width: "" }}>
                    전화 번호
                  </p>
                  <h4
                    className=""
                    style={{
                      height: "5vh",
                    }}
                  >
                    {partners.gymPhoneNum}
                  </h4>
                </div>
                {/* 운영시간 */}
                <div className=" mt-3">
                  <p className="  text-nowrap" style={{ width: "100%" }}>
                    운영시간
                  </p>
                  <h4
                    className=""
                    style={{
                      height: "5vh",
                    }}
                  >
                    {partners.gymTime}
                  </h4>
                </div>
              </div>
            </div>
            {/* 사업자 번호 */}
            <div className="row mt-5 mx-auto">
              <h4
                className="col text-nowrap text-center"
                style={{ width: "100%" }}
              >
                사업자 번호
              </h4>
              <p
                className="col"
                style={{
                  height: "5vh",
                  borderBlockEndWidth: "4px",
                }}
              >
                {partners.gymCoNum}
              </p>
            </div>

            {/* 주소 */}
            <div className="row mt-3">
              <h4
                className="col text-nowrap text-center"
                style={{ width: "100%" }}
              >
                주 소
              </h4>
              <p
                className="col"
                style={{
                  height: "5vh",
                  borderBlockEndWidth: "4px",
                }}
              >
                {partners.gymAddress}
              </p>
            </div>
            {/* 강사 소개 */}
            {/* {trainers&&( */}
            <div className="mt-3 row">
              <h4
                className="col text-nowrap text-center"
                style={{ width: "100%" }}
              >
                강사 소개
              </h4>
              <p
                className="col"
                style={{
                  height: "5vh",
                  borderBlockEndWidth: "4px",
                }}
              >
                <div className=" ms-2">
                  <Button
                    // name={item.trainerName}
                    color="primary"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    강사소개
                  </Button>
                  <Modal
                    style={{ width: "90%" }}
                    toggle={() => setModalOpen(!modalOpen)}
                    isOpen={modalOpen}
                  >
                    <div className=" modal-header">
                      <p className=" modal-title">강사 소개</p>
                      <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>

                    {trainers.map((item, index) => (
                      <ModalBody key={item.id}>
                        <div
                          className=""
                          style={{
                            borderBottomStyle: "dotted",
                            borderBottomWidth: "1px",
                          }}
                        >
                          <div className="d-flex">
                            <p>이름 :</p>
                            <p>{item.trainerName}</p>
                          </div>
                          <div className="d-flex">
                            <p>한줄 소개 :</p>
                            <p>{item.trainerIntro}</p>
                          </div>
                          <div className="row">
                            <img
                              className="col mx-auto"
                              style={{
                                maxWidth: "150px",
                                maxHeight: "150px",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "gray",
                                boxShadow: "1px 2px 3px 0px",
                              }}
                              src={item.trainerPhotoUrl}
                              alt="TrainerPhoto"
                            />
                            <table
                              className="table mx-auto col "
                              style={{
                                borderStyle: "solid",
                                borderWidth: "3px",
                                width: "100%",
                              }}
                            >
                              <thead>
                                <tr>
                                  <th className="text-center" scope="col"></th>
                                  <th className="text-center" scope="col">
                                    1Time
                                  </th>
                                  <th className="text-center" scope="col">
                                    10Time
                                  </th>
                                  <th className="text-center" scope="col">
                                    30Time
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td className="text-center">
                                    <p>PT</p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt1TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt10TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt30TimePrice}
                                    </p>
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className="text-center">
                                    <p>요가</p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt1TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt10TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt30TimePrice}
                                    </p>
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className="text-center text-nowrap">
                                    <p>필라테스</p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt1TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt10TimePrice}
                                    </p>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      {item.pt30TimePrice}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </ModalBody>
                    ))}
                    <ModalFooter>
                      <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </p>
            </div>
            {/* 가격 */}
            <form
              className="mx-auto bg-light p-1 container"
              style={{
                width: "60vw",
                opacity: "60%",
                marginTop: "10vh",
              }}
            >
              <h4
                className="col  mt-5 text-nowrap "
                style={{ width: "", marginLeft: "6vw" }}
              >
                가 격(헬스장)
              </h4>
              <div className="mt-3  ">
                <table
                  className=" table mx-auto mt-5 "
                  style={{ width: "80%" }}
                >
                  <thead>
                    <tr>
                      <th className="text-center" scope="col">
                        1Day
                      </th>
                      <th className="text-center" scope="col">
                        3Day
                      </th>
                      <th className="text-center" scope="col">
                        7Day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>
                        <p className="text-center">{partners.gym1DayPrice}</p>
                      </td>
                      <td>
                        <p className="text-center">{partners.gym3DayPrice}</p>
                      </td>
                      <td>
                        <p className="text-center">{partners.gym7DayPrice}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 ">
                <table className="table  mx-auto" style={{ width: "80%" }}>
                  <thead>
                    <tr>
                      <th className="text-center">1달</th>
                      <th className="text-center">3달</th>
                      <th className="text-center">6달</th>
                      <th className="text-center">12달</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="justify-content-between">
                      <td>
                        <p className="text-center">{partners.gymMonthPrice}</p>
                      </td>
                      <td>
                        <p className="text-center">{partners.gym3MonthPrice}</p>
                      </td>
                      <td>
                        <p className="text-center">{partners.gym6MonthPrice}</p>
                      </td>
                      <td>
                        <p className="text-center">{partners.gymYearPrice}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            {/* 버튼 */}
            <div className="d-grid mt-3  d-md-flex justify-content-end">
              <button
                className="btn btn-primary mb-3 "
                type="button"
                onClick={() => {
                  router.push(`/partner/information/edit/${partners?.id}`);
                }}
              >
                수정
              </button>
              <button
                className="btn btn-primary mb-3 ms-3 "
                type="button"
                onClick={() => {
                  handleDeleteClick();
                }}
              >
                삭제
              </button>
              <button className="btn btn-primary ms-3 mb-3" type="button">
                목록
              </button>
            </div>
          </div>
        )}
      </body>
    </Layout>
  );
};

export default PartnerDetail;
