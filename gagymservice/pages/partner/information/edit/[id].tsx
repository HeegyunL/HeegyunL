import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Layout from "../../../../components/layout";
import { AppDispatch, RootState } from "../../../../provider";
import { requestModifyPartner } from "../../../../middleware/modules/partner";

const PartnerEdit = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const id = router.query.id as string;

  const Trainermodi = useSelector((state: RootState) =>
    state.trainer.data.find((item) => item.id === +id)
  );
  const PartnerItem = useSelector((state: RootState) =>
    state.partner.data.find((item) => item.id === +id)
  );
  const isModifyCompleted = useSelector(
    (state: RootState) => state.partner.isModifyCompleted
  );

  // 헬스장
  const gymNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymCoNumRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymLocateSiRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymLocateGunGuRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymAddressRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymPhoneNumRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymPhotoRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymTimeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymServiceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym1DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym3DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym7DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymMonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym3MonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym6MonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymYearPriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSaveClick = () => {
    if (gymPhotoRef.current.files?.length) {
      const imageFile = gymPhotoRef.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (PartnerItem) {
          const item = { ...PartnerItem };
          item.gymName = gymNameRef.current?.value;
          item.gymCoNum = gymCoNumRef.current?.value;
          item.gymLocateSi = gymLocateSiRef.current?.value;
          item.gymLocateGunGu = gymLocateGunGuRef.current?.value;
          item.gymAddress = gymAddressRef.current?.value;
          item.gymPhoneNum = gymPhoneNumRef.current?.value;
          item.gymService = gymServiceRef.current?.value;
          item.gymTime = gymTimeRef.current?.value;
          item.gym1DayPrice = gym1DayPriceRef.current?.value;
          item.gym3DayPrice = gym1DayPriceRef.current?.value;
          item.gym7DayPrice = gym1DayPriceRef.current?.value;
          item.gymMonthPrice = gymMonthPriceRef.current?.value;
          item.gym3MonthPrice = gym3MonthPriceRef.current?.value;
          item.gym6MonthPrice = gym6MonthPriceRef.current?.value;
          item.gymYearPrice = gymYearPriceRef.current?.value;

          dispatch(requestModifyPartner(item));
          router.push("/partner/information/list");
        }
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const trainer = useSelector((state: RootState) => state.trainer);

  const trainers = trainer.data.filter(
    (item) => item.gymCode == PartnerItem?.gymCoNum
  );
  return (
    <Layout>
      {PartnerItem && (
        <body>
          <div className="mx-auto mt-5" style={{ width: "850px" }}>
            <h4 className="mt-5 text-center"> 헬스장 정보</h4>
            {/* 헬스장 명 */}
            <div className="d-flex mt-5">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                헬스장 명
              </h4>
              <input
                defaultValue={PartnerItem?.gymName}
                ref={gymNameRef}
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              ></input>
            </div>
            {/* 사업자 번호 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                사업자 번호
              </h4>
              <input
                ref={gymCoNumRef}
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
                defaultValue={PartnerItem?.gymCoNum}
              ></input>
            </div>
            {/* 지역 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                지역
              </h4>
              <div
                className="input-group"
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
              >
                <input
                  ref={gymLocateSiRef}
                  defaultValue={PartnerItem?.gymLocateSi}
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  style={{ borderBlockEndWidth: "4px" }}
                />
                <input
                  ref={gymLocateGunGuRef}
                  defaultValue={PartnerItem?.gymLocateGunGu}
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  style={{ borderBlockEndWidth: "4px" }}
                />
              </div>
            </div>
            {/* 주소 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                주소
              </h4>
              <input
                ref={gymAddressRef}
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
                defaultValue={PartnerItem?.gymAddress}
              ></input>
            </div>
            {/* 전화번호 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                전화 번호
              </h4>
              <input
                ref={gymPhoneNumRef}
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
                defaultValue={PartnerItem?.gymPhoneNum}
              ></input>
            </div>
            {/* 운영시간 */}
            <div className="d-flex mt-3">
              <h4
                className="col me-3 text-nowrap text-center"
                style={{ width: "200px" }}
              >
                운영시간
              </h4>
              <input
                ref={gymTimeRef}
                style={{
                  width: "400px",
                  height: "45px",
                  borderBlockEndWidth: "4px",
                }}
                defaultValue={PartnerItem?.gymTime}
              ></input>
            </div>
            {/* 사진 */}
            <div className="mt-3 d-flex">
              <h4 className=" text-nowrap" style={{ marginLeft: "190px" }}>
                사진
              </h4>
              <div>
                <input
                  style={{ width: "100%", marginLeft: "217px" }}
                  className="form-control "
                  type="file"
                  accept="image/*"
                  name="omg"
                  id="omg"
                  ref={gymPhotoRef}
                />
              </div>
            </div>
            {/* 강사 소개 */}
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
                <div className="d-flex">
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    강사정보
                  </Button>
                  <Modal
                    toggle={() => setModalOpen(!modalOpen)}
                    isOpen={modalOpen}
                  >
                    <div className=" modal-header">
                      <h5 className=" modal-title" id="exampleModalLabel">
                        강사 소개
                      </h5>
                    </div>
                    {trainers.map((item, index) => (
                      <ModalBody key={item.id}>
                        <div
                          onClick={() => {
                            router.push(
                              `/partner/information/trainerEdit/${item.id}`
                            );
                          }}
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
                <table className=" table ">
                  <thead>
                    <tr>
                      <th className="text-center me-3" scope="col">
                        <h3> </h3>
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
                        <h5>헬스장</h5>
                      </th>
                      <td>
                        <input
                          ref={gym1DayPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gym1DayPrice}
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={gym3DayPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gym3DayPrice}
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={gym7DayPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gym7DayPrice}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 ms-5 d-flex">
                <table className="ms-3 table">
                  <thead>
                    <tr>
                      <th className="text-center">
                        <h3> </h3>
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
                        <h5>헬스장</h5>
                      </td>
                      <td>
                        <input
                          ref={gymMonthPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gymMonthPrice}
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={gym3MonthPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gym3MonthPrice}
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={gym6MonthPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gym6MonthPrice}
                        ></input>
                      </td>
                      <td>
                        <input
                          ref={gymYearPriceRef}
                          className="text-center"
                          defaultValue={PartnerItem?.gymYearPrice}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* 버튼 */}
            <div className="d-grid mt-3  d-md-flex justify-content-end">
              <button
                className="btn btn-primary mb-3"
                type="button"
                onClick={() => {
                  handleSaveClick();
                }}
              >
                저장
              </button>
              <button className="btn btn-primary ms-3 mb-3" type="button">
                목록
              </button>
            </div>
          </div>
        </body>
      )}
    </Layout>
  );
};

export default PartnerEdit;
