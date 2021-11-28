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
          <div className="mx-auto mt-5 " style={{ width: "900px" }}>
            {/* 헬스장 사진 */}
            <div className="d-flex">
              <img
                src={partners.gymPhoto}
                alt={partners.fileName}
                width={"300px"}
                height={"300px"}
                style={{
                  marginLeft: "100px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "gray",
                  boxShadow: "2px 3px 5px 0px",
                }}
                // className="mx-auto"
              />
              <div className="">
                {/* 헬스장 명 */}
                <div className="d-flex mt-3">
                  <h4
                    className="col me-3 text-nowrap "
                    style={{ width: "", marginLeft: "50px" }}
                  >
                    헬스장 명
                  </h4>
                  <p
                    style={{
                      width: "400px",
                      height: "45px",
                      borderBlockEndWidth: "4px",
                    }}
                  >
                    {partners.gymName}
                  </p>
                </div>
                {/* 지역 */}
                <div className="d-flex mt-3">
                  <h4
                    className="col me-3 text-nowrap text-center"
                    style={{ width: "200px" }}
                  >
                    지역
                  </h4>
                  <p
                    style={{
                      width: "400px",
                      height: "45px",
                      borderBlockEndWidth: "4px",
                    }}
                  >
                    {partners.gymLocateSi} {partners.gymLocateGunGu}
                  </p>
                </div>
                {/* 전화번호 */}
                <div className="d-flex mt-3">
                  <h4
                    className="col me-3 text-nowrap text-center"
                    style={{ width: "200px" }}
                  >
                    전화 번호
                  </h4>
                  <p
                    style={{
                      width: "400px",
                      height: "45px",
                      borderBlockEndWidth: "4px",
                    }}
                  >
                    {partners.gymPhoneNum}
                  </p>
                </div>
                {/* 운영시간 */}
                <div className="d-flex mt-3">
                  <h4
                    className="col me-3 text-nowrap text-center"
                    style={{ width: "200px" }}
                  >
                    운영시간
                  </h4>
                  <p
                    style={{
                      width: "400px",
                      height: "45px",
                      borderBlockEndWidth: "4px",
                    }}
                  >
                    {partners.gymTime}
                  </p>
                </div>
              </div>
            </div>
            {/* 사업자 번호 */}
            <div className="d-flex mt-5">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                사업자 번호
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {partners.gymCoNum}
              </p>
            </div>

            {/* 주소 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                주소
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                {partners.gymAddress}
              </p>
            </div>
            {/* 강사 소개 */}
            {/* {trainers&&( */}
            <div className="mt-3 d-flex">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                강사 소개
              </h4>
              <p
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
                className="d-flex"
              >
                <div className="d-flex ms-2">
                  <Button
                    // name={item.trainerName}
                    color="primary"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    강사소개
                  </Button>
                  <Modal
                    style={{ width: "700px" }}
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
                          <div className="d-flex">
                            <img
                              style={{
                                width: "150px",
                                height: "150px",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderColor: "gray",
                                boxShadow: "2px 3px 5px 0px",
                              }}
                              src={item.trainerPhotoUrl}
                              alt="TrainerPhoto"
                            />
                            <table
                              className="table ms-2"
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
            <div>
              <h4
                className="col text-nowrap text-center"
                style={{ width: "434px" }}
              >
                가 격
              </h4>
              <div className="mt-3 ms-5 d-flex">
                <table className=" table ms-5 " style={{ width: "780px" }}>
                  <thead>
                    <tr>
                      <th className="text-center me-3" scope="col">
                        <h3></h3>
                      </th>
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
                      <th className="text-center" scope="row">
                        <p>헬스장</p>
                      </th>
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
              <div className="mt-3 ms-5 d-flex">
                <table className=" table ms-5 " style={{ width: "780px" }}>
                  <thead>
                    <tr>
                      <th className="text-center">
                        <h3></h3>
                      </th>
                      <th className="text-center">1달</th>
                      <th className="text-center">3달</th>
                      <th className="text-center">6달</th>
                      <th className="text-center">12달</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="justify-content-between">
                      <td className="text-center text-nowrap">
                        <p>헬스장</p>
                      </td>
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
            </div>
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
