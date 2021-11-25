import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../provider";

let PageSize = 10;
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const data = useSelector((state: RootState) => state.reservation.data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>memberName</th>
            <th>GYM NAME</th>
            <th>boughtService</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.memberName}</td>
                <td>{item.gymName}</td>
                <td>{item.boughtService}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
