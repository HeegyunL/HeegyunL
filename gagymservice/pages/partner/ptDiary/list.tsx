import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import {
  requestFetchNextDiary,
  requestFetchPagingDiary,
} from "../../../middleware/modules/diary";
import { AppDispatch, RootState } from "../../../provider";
import styles from "../../../styles/Diarylist.module.css";

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  var month = ("0" + (1 + dateTime.getMonth())).slice(-2);
  var day = ("0" + dateTime.getDate()).slice(-2);
  return month + "/" + day;
};

const List = () => {
  const diary = useSelector((state: RootState) => state.diary);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!diary.isFetched) {
      const diaryPageSize = localStorage.getItem("diary_page_size");

      dispatch(
        requestFetchPagingDiary({
          page: 0,
          size: diaryPageSize ? +diaryPageSize : diary.pageSize,
        })
      );
    }
  }, [dispatch, diary.isFetched, diary.pageSize]);

  function Search({ onSubmit }: any) {
    const handleSubmit = (event: {
      preventDefault: () => void;
      target: { elements: { filter: { value: any } } };
    }) => {
      event.preventDefault();
      onSubmit(event.target.elements.filter.value);
    };
  }

  const handlePageSizeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
    dispatch(
      requestFetchPagingDiary({
        page: diary.page,
        size: +e.currentTarget.value,
      })
    );
  };

  return (
    <div>
      <Layout>
        <main className={styles.main}>
          <div className={styles.div}>
            {/*>PT일지 목록*/}
            <div>
              <div
                className=" mt-5"
                style={{ width: "100%", marginLeft: "0px" }}
              >
                <h4 className=" float-start">PT일지 목록</h4>
                <div className="d-flex justify-content-end align-items-center">
                  <select
                    className="form-select form-select-sm  p-1"
                    style={{ width: "55px", height: "30px" }}
                    onChange={(e) => {
                      handlePageSizeChanged(e);
                    }}
                  >
                    {[3, 5, 10, 30].map((size, index) => (
                      <option
                        value={size}
                        selected={diary.pageSize === size}
                        key={index}
                      >
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex"></div>
              </div>
            </div>
            <table className="table table-hover mt-4">
              <thead className="display-flex;">
                <tr>
                  <th>날짜</th>
                  <th>회원명</th>
                  <th>아침식단</th>
                  <th>점심식단</th>
                  <th>저녁식단</th>
                  <th>운동내역</th>
                  <th>문의사항</th>
                  <th>담당 강사</th>
                  <th style={{ color: "red" }}>강사 피드백</th>
                </tr>
              </thead>

              <tbody className="tbody">
                {diary.data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      router.push(`/partner/ptDiary/detail/${item.id}`);
                    }}
                  >
                    <td
                      style={{ cursor: "pointer", color: "rgb(3, 48, 129)" }}
                      className={styles.textd}
                      key={index}
                    >
                      <b>{getTimeString(item.diaryCreateTime)}</b>
                    </td>
                    <td className={styles.text}>{item.memberName}</td>
                    <td className={styles.text}>{item.diaryMorning}</td>
                    <td className={styles.text}>{item.diaryLunch}</td>
                    <td className={styles.text}>{item.diaryDinner}</td>
                    <td className={styles.text}>{item.diaryRoutine}</td>
                    <td className={styles.text}>{item.diaryRequest}</td>
                    <td className={styles.text}>{item.trainerName}</td>
                    <td className={styles.text} style={{ color: "red" }}>
                      {item.trainerFeedback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!diary.isLast && (
              <div className="d-flex justify-content-center mt-4">
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault(); // 기본 동작 방지
                    dispatch(
                      requestFetchNextDiary({
                        page: diary.page + 1,
                        size: diary.pageSize,
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
        </main>
      </Layout>
    </div>
  );
};
export default List;
