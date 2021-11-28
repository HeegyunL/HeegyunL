import { MutableRefObject, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Image } from "react-bootstrap";
import React from "react";
import { AppDispatch, RootState } from "../../../../provider";
import {
  requestModifyTrainer,
  requestRemoveTrainer,
} from "../../../../middleware/modules/trainer";
import styles from "../../../../styles/TrainerCreate.module.css";
import Layout from "../../../../components/layout";
import { pathToFileURL } from "url";
const Tcreate = () => {
  const gymCodeRef = useRef() as MutableRefObject<HTMLDivElement>;
  const trainerNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const trainerIntroRef = useRef() as MutableRefObject<HTMLInputElement>;
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

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const id = router.query.id as string;

  const partnerData = useSelector((state: RootState) => state.partner);
  const trainers = useSelector((state: RootState) =>
    state.trainer.data.find((item) => item.id == +id)
  );

  const [url, setUrl] = useState<string | undefined>("");

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

  const handleDeleteClick = () => {
    dispatch(requestRemoveTrainer(+id));
    router.push(`/partner/information/list`);
  };
  const handleSaveClick = () => {
    if (trainerPhotoUrlRef.current.files?.length) {
      const imageFile = trainerPhotoUrlRef.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const radio = gymCodeRef.current.querySelector(
          "input[type=radio]:checked"
        ) as HTMLInputElement;
        console.log("gymcode");
        if (trainers) {
          const item = { ...trainers };
          item.gymCode = radio.value;
          item.trainerName = trainerNameRef.current?.value;
          item.trainerIntro = trainerIntroRef.current?.value;
          (item.trainerPhotoUrl = reader.result
            ? reader.result?.toString()
            : ""),
            (item.fileName = imageFile.name),
            (item.fileType = imageFile.type),
            (item.pt1TimePrice = pt1TimePriceRef.current?.value),
            (item.pt10TimePrice = pt10TimePriceRef.current?.value),
            (item.pt30TimePrice = pt30TimePriceRef.current?.value),
            (item.yoga1TimePrice = yoga1TimePriceRef.current?.value),
            (item.yoga10TimePrice = yoga10TimePriceRef.current?.value),
            (item.yoga30TimePrice = yoga30TimePriceRef.current?.value),
            (item.pilates1TimePrice = pilates1TimePriceRef.current?.value),
            (item.pilates10TimePrice = pilates10TimePriceRef.current?.value),
            (item.pilates30TimePrice = pilates30TimePriceRef.current?.value);
          dispatch(requestModifyTrainer(item));
          router.push("/partner/information/tList");
        }
      };
      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <Layout>
      <body>
        {trainers && (
          <div className={styles.body}>
            <div className="mt-5"></div>
            {/* 헬스장 이름 */}
            <div className={styles.div}>
              <p>헬스장 이름</p>
              <div
                className="btn-group ms-2"
                role="group"
                aria-label="Basic checkbox toggle button group"
                style={{ width: "400px", height: "2rem" }}
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
                      <label
                        className="form-check-label"
                        htmlFor={item.gymName}
                      >
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
              <input
                ref={trainerNameRef}
                className={styles.input}
                defaultValue={trainers.trainerName}
              ></input>
            </div>
            {/* 한줄 소개 */}
            <div className={styles.div}>
              <p>한줄 소개</p>
              <input
                ref={trainerIntroRef}
                className={styles.input}
                defaultValue={trainers.trainerIntro}
              ></input>
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
                          defaultValue={trainers.pt1TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={pt10TimePriceRef}
                          defaultValue={trainers.pt10TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={pt30TimePriceRef}
                          defaultValue={trainers.pt30TimePrice}
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
                          defaultValue={trainers.yoga1TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={yoga10TimePriceRef}
                          defaultValue={trainers.yoga10TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={yoga30TimePriceRef}
                          defaultValue={trainers.yoga30TimePrice}
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
                          defaultValue={trainers.pilates1TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={pilates10TimePriceRef}
                          defaultValue={trainers.pilates10TimePrice}
                          type="text"
                        ></input>
                      </td>
                      <td>
                        <input
                          className={styles.tInput}
                          ref={pilates30TimePriceRef}
                          defaultValue={trainers.pilates30TimePrice}
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
                  handleSaveClick();
                }}
              >
                저장
              </button>
              <button
                className="btn btn-primary ms-2"
                type="button"
                onClick={() => {
                  handleDeleteClick();
                }}
              >
                삭제
              </button>
            </div>
          </div>
        )}
      </body>
    </Layout>
  );
};
export default Tcreate;
