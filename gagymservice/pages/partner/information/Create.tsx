import { MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../../../provider";
import { requestAddPartner } from "../../../middleware/modules/partner";
import { PartnerItem } from "../../../provider/modules/partner";
import styles from "../../../styles/gymCreate.module.css";

import Layout from "../../../components/layout";
const Create = () => {
  const gymNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymCoNumRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymLocateSiRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymLocateGunGuRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymAddressRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymPhoneNumRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymTimeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymServiceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymPhotoRef = useRef() as MutableRefObject<HTMLInputElement>;
  // const gymPhotoRef = useRef<HTMLInputElement>(null);
  const gym1DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym3DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym7DayPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymMonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym3MonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gym6MonthPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gymYearPriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const partnerData = useSelector((state: RootState) => state.partner.data);

  const isAddCompleted = useSelector(
    (state: RootState) => state.partner.isAddCompleted
  );

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    console.log("--isAddCompleted 변경 :" + isAddCompleted);
    isAddCompleted && router.push(`/partner/information/list`);
  }, [isAddCompleted, router, dispatch]);

  const handleAddClick = () => {
    if (gymPhotoRef.current?.files?.length) {
      const imageFile = gymPhotoRef.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const item: PartnerItem = {
          id: partnerData.length ? partnerData[0].id + 1 : 1,
          gymName: gymNameRef.current?.value,
          gymCoNum: gymCoNumRef.current?.value,
          gymLocateSi: gymLocateSiRef.current?.value,
          gymLocateGunGu: gymLocateGunGuRef.current?.value,
          gymAddress: gymAddressRef.current?.value,
          gymPhoneNum: gymPhoneNumRef.current?.value,
          gymTime: gymTimeRef.current?.value,
          gymService: gymServiceRef.current?.value,
          gymPhoto: reader.result ? reader.result?.toString() : "",
          fileName: imageFile.name,
          fileType: imageFile.type,
          gym1DayPrice: gym1DayPriceRef.current?.value,
          gym3DayPrice: gym3DayPriceRef.current?.value,
          gym7DayPrice: gym7DayPriceRef.current?.value,
          gymMonthPrice: gymMonthPriceRef.current?.value,
          gym3MonthPrice: gym3MonthPriceRef.current?.value,
          gym6MonthPrice: gym6MonthPriceRef.current?.value,
          gymYearPrice: gymYearPriceRef.current?.value,
        };
        // console.log(item.gymPhoto);

        //Saga action
        dispatch(requestAddPartner(item));
        // router.push(`/partner/information/list`);
        // };
        // }
      };
      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <Layout>
      <body style={{ background: "#f8f9fa" }}>
        <div className={styles.body}>
          <div className="mt-5"></div>
          {/* 헬스장명 */}
          <div className={styles.div}>
            <p>헬스장명</p>
            <input ref={gymNameRef} className={styles.input}></input>
          </div>
          {/* 사업자번호 */}
          <div className={styles.div}>
            <p>사업자번호</p>
            <input ref={gymCoNumRef} className={styles.input}></input>
          </div>
          {/* 지역 선택 */}
          <div className={styles.div}>
            <p>지역 선택</p>
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
                type="text"
                aria-label="First name"
                placeholder="시"
                className="form-control"
                style={{ borderBlockEndWidth: "4px" }}
              />
              <input
                ref={gymLocateGunGuRef}
                type="text"
                aria-label="Last name"
                placeholder="군/구"
                className="form-control ms-1"
                style={{ borderBlockEndWidth: "4px" }}
              />
            </div>
          </div>
          {/* 주소 */}
          <div className={styles.div}>
            <p>주소</p>
            <input ref={gymAddressRef} className={styles.input}></input>
          </div>
          {/* 전화 번호 */}
          <div className={styles.div}>
            <p>전화 번호</p>
            <input ref={gymPhoneNumRef} className={styles.input}></input>
          </div>
          {/* 운영 시간 */}
          <div className={styles.div}>
            <p>운영 시간</p>
            <input ref={gymTimeRef} className={styles.input}></input>
          </div>
          {/* 부가 서비스 */}
          <div className={styles.div}>
            <p>부가 서비스</p>
            <input
              ref={gymServiceRef}
              placeholder=" 부가 서비스등을 작성 해주세요 ex)샤워, 와이파이 등등"
              className={styles.input}
            ></input>
          </div>
          {/* 헬스장 사진 */}
          {/* 사진 */}
          <div className={styles.div}>
            <p>사진</p>
            <div>
              <input
                style={{ width: "67%" }}
                className="form-control mt-2"
                type="file"
                accept="image/*"
                name="omg"
                id="omg"
                ref={gymPhotoRef}
              />
            </div>
          </div>

          {/* 가격 */}
          <div className={styles.div}>
            <p>가격</p>
            <div className="mt-3 d-flex">
              <table className="">
                <thead>
                  <th className="text-center me-3"></th>
                  <th className="text-center">1Day</th>
                  <th className="text-center">3Day</th>
                  <th className="text-center">7Day</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <h5>헬스장</h5>
                    </td>
                    <td>
                      <input
                        ref={gym1DayPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        ref={gym3DayPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        ref={gym7DayPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 d-flex">
              <table className="">
                <thead>
                  <th className="text-center"></th>
                  <th className="text-center">1달</th>
                  <th className="text-center">3달</th>
                  <th className="text-center">6달</th>
                  <th className="text-center">12달</th>
                </thead>
                <tbody>
                  <tr className="justify-content-between">
                    <td className="text-center text-nowrap">
                      <h5>헬스장</h5>
                    </td>
                    <td>
                      <input
                        ref={gymMonthPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        ref={gym3MonthPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        ref={gym6MonthPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        ref={gymYearPriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 등록 버튼 */}
          <div className="d-grid mt-3  d-md-flex justify-content-center">
            <button
              className="btn btn-primary mb-3"
              type="button"
              onClick={() => {
                handleAddClick();
              }}
            >
              등록하기
            </button>
          </div>
        </div>
      </body>
    </Layout>
  );
};
export default Create;
