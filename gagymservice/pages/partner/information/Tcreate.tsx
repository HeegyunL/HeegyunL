import { MutableRefObject, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "../../../provider";
import { TrainerItem } from "../../../provider/modules/trainer";
import { requestAddTrainer } from "../../../middleware/modules/trainer";
import { Image } from "react-bootstrap";
import React from "react";
import styles from "../../../styles/TrainerCreate.module.css";
import Layout from "../../../components/layout";
const Tcreate = () => {
  const gymCodeRef = useRef() as MutableRefObject<HTMLDivElement>;
  const trainerNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const trainerIntroRef = useRef() as MutableRefObject<HTMLInputElement>;
  // const trainerPhotoUrlRef=useRef<HTMLInputElement>(null);
  const trainerPhotoUrlRef = useRef() as MutableRefObject<HTMLInputElement>;

  const pt1TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pt10TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pt30TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const yoga1TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const yoga10TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const yoga30TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const pilates1TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pilates10TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pilates30TimePriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const partnerData = useSelector((state: RootState) => state.partner);
  const trainerData = useSelector((state: RootState) => state.trainer.data);
  const isAddCompleted = useSelector(
    (state: RootState) => state.trainer.isAddCompleted
  );
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  useEffect(() => {
    console.log("--isAddCompleted 변경: " + isAddCompleted);
    isAddCompleted && router.push(`/partner/information/list`);
  }, [isAddCompleted, router, dispatch]);

  const [url, setUrl] = useState<string | undefined>("");

  // console.log("확인용" + url);
  const changeFile = () => {
    console.log("changed");

    if (trainerPhotoUrlRef.current?.files?.length) {
      const imageFile = trainerPhotoUrlRef.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setUrl(reader.result?.toString());
      };
      reader.readAsDataURL(imageFile);
    }
  };
  //   let checked = document.querySelectorAll("input[type='checkbox']:checked");

  const handleAddClick = () => {
    if (trainerPhotoUrlRef.current?.files?.length) {
      const imageFile = trainerPhotoUrlRef.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const radio = gymCodeRef.current.querySelector(
          "input[type=radio]:checked"
        ) as HTMLInputElement;
        console.log("gymcode");
        // console.log(radio.value);
        const item: TrainerItem = {
          id: trainerData.length ? trainerData[0].id + 1 : 1,
          gymCode: radio.value,
          trainerName: trainerNameRef.current?.value,
          trainerIntro: trainerIntroRef.current?.value,
          trainerPhotoUrl: reader.result ? reader.result?.toString() : "",
          // trainerPhotoUrl: trainerPhotoUrlRef.current?.value,
          fileName: imageFile.name,
          fileType: imageFile.type,
          pt1TimePrice: pt1TimePriceRef.current?.value,
          pt10TimePrice: pt10TimePriceRef.current?.value,
          pt30TimePrice: pt30TimePriceRef.current?.value,
          yoga1TimePrice: yoga1TimePriceRef.current?.value,
          yoga10TimePrice: yoga10TimePriceRef.current?.value,
          yoga30TimePrice: yoga30TimePriceRef.current?.value,
          pilates1TimePrice: pilates1TimePriceRef.current?.value,
          pilates10TimePrice: pilates10TimePriceRef.current?.value,
          pilates30TimePrice: pilates30TimePriceRef.current?.value,
        };
        dispatch(requestAddTrainer(item));
        // router.push(`/partner/information/tList`)
      };
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <Layout>
      <body style={{ background: "#f8f9fa" }}>
        <div className="mx-auto ">
          {/* 헬스장 이름 */}
          <div className={styles.div}>
            <p>헬스장 이름</p>
            <div
              className="btn-group ms-2"
              role="group"
              aria-label="Basic checkbox toggle button group"
              style={{ height: "2rem" }}
              ref={gymCodeRef}
            >
              {partnerData.data.map((item, index) => (
                <div className="ms-2" key={item.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gymName"
                      id={item.gymName}
                      value={item.gymCoNum}
                    />
                    <label className="form-check-label" htmlFor={item.gymName}>
                      {item.gymName}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 강사 이름 */}
          <div className={styles.div}>
            <p>강사 이름</p>
            <input ref={trainerNameRef} className={styles.input}></input>
          </div>
          {/* 한줄 소개 */}
          <div className={styles.div}>
            <p>한줄 소개</p>
            <input ref={trainerIntroRef} className={styles.input}></input>
          </div>
          {/* 사진 */}
          <div className={styles.div}>
            <p>사진</p>
            <div className="d-flex">
              <Image
                className=" mt-3"
                style={{
                  width: "100px",
                  height: "100px",
                  marginRight: "30px",
                }}
                src={url}
                alt="trainerPhoto"
              />
              <input
                className={styles.input}
                type="file"
                accept="image/*"
                style={{
                  marginTop: "15px",
                }}
                onChange={() => {
                  changeFile();
                }}
                ref={trainerPhotoUrlRef}
              />
            </div>
          </div>
          {/* 가격 */}
          <div className={styles.div}>
            <p>가 격</p>
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
                    <td>
                      <h5>PT</h5>
                    </td>
                    <td>
                      <input
                        ref={pt1TimePriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={pt10TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={pt30TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>요가</h5>
                    </td>
                    <td>
                      <input
                        ref={yoga1TimePriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={yoga10TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={yoga30TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>필라테스</h5>
                    </td>
                    <td>
                      <input
                        ref={pilates1TimePriceRef}
                        className={styles.tInput}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={pilates10TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                    <td>
                      <input
                        className={styles.tInput}
                        ref={pilates30TimePriceRef}
                        type="text"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 등록 버튼 */}
          <div className={styles.button}>
            <button
              className="btn btn-primary"
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
export default Tcreate;
