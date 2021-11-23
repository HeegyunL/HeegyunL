import axios from "axios";

// export interface ReservationPagingResponse {
//   content: ReservationItemResponse[];
//   last: boolean;
//   totalElements: number;
//   totalPages: number;
//   size: number;
//   number: number;
// }
export interface ReservationItemResponse {
  id : number;
  memberName:string;
  memberPhone:string;
	memberRequest:string;
	gymName:string;
	trainerName:string;
	boughtService:string;

}
export interface ReservationItemRequest {
  id : number;
  memberName:string;
  memberPhone:string;
	memberRequest:string;
	gymName:string;
	trainerName:string;
	boughtService:string;
}

const reservationApi = {
  get: () =>
  axios.get<ReservationItemResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE}/reservation`
  ),

  fetch: () =>
  axios.get<ReservationItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/reservation`),

  fetchPaging: (page: number, size: number) =>
    axios.get<ReservationItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/reservation`
    ),


  add: (diaryItem: ReservationItemRequest) =>
    axios.post<ReservationItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/reservation`,
      diaryItem
    ),

  remove: (id: number) =>
    axios.delete<boolean>(`${process.env.NEXT_PUBLIC_API_BASE}/reservation/${id}`),


  modify: (id: number, reservationItem: ReservationItemRequest) =>
    axios.put<ReservationItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/reservation/${id}`,
      reservationItem
    ),
};

export default reservationApi;