import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/footer";
import Layout from "../../../components/layout";
import { requestFetchPartner } from "../../../middleware/modules/partner";
import { AppDispatch, RootState } from "../../../provider";
// import styles from "../../../styles/"
import Chart from "react-apexcharts";
import { stringify } from "querystring";
import columnBar from "../../../components/chart/AmountsByCategories";
import ColumnBar from "../../../components/chart/AmountsByCategories";
import axios from "axios";
import styles from "../../../styles/main.module.css";
import Link from "next/link";

const List = () => {
  const partner = useSelector((state: RootState) => state.partner);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!partner.isFetched) {
      dispatch(requestFetchPartner());
    }
  }, [dispatch, partner.isFetched]);

  return (
    <Layout>
      <div className={styles.hover}>
        {partner.data.map((item, index) => (
          <div key={index} style={{ borderTop: "none", borderBottom: "none" }}>
            <Link href={`/partner/information/detail/${item.id}`}>
              <div
                className="d-flex"
                style={{
                  marginLeft: "12%",
                }}
              >
                <div className={styles.divspan}>
                  <img
                    className={styles.image}
                    src={item.gymPhoto}
                    alt={item.fileName}
                    style={{
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderColor: "gray",
                      boxShadow: "2px 3px 5px 0px",
                    }}
                    // className="mx-auto"
                  />
                  <div style={{ fontSize: "Larger" }}>{item.gymName}</div>
                  <div style={{ fontSize: "Larger" }}>
                    {item.gymLocateSi} {item.gymLocateGunGu}
                  </div>
                  <div style={{ fontSize: "Larger" }}>{item.gymPhoneNum}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default List;
