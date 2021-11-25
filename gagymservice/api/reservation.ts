import axios from "axios";

export interface ReservationPagingResponse {
  content: ReservationItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
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
    `http://52.79.120.222:8080/reservation`
  ),

  fetch: () =>
  axios.get<ReservationItemResponse[]>(`http://52.79.120.222:8080/reservation`),

  fetchPaging: (page: number, size: number) =>
    axios.get<ReservationPagingResponse>(
      `http://52.79.120.222:8080/reservation/paging?page=${page}&size=${size}`
    ),


  add: (diaryItem: ReservationItemRequest) =>
    axios.post<ReservationItemResponse>(
      `http://52.79.120.222:8080/reservation`,
      diaryItem
    ),

  remove: (id: number) =>
    axios.delete<boolean>(`http://52.79.120.222:8080/reservation/${id}`),


  modify: (id: number, reservationItem: ReservationItemRequest) =>
    axios.put<ReservationItemResponse>(
      `http://52.79.120.222:8080/reservation/${id}`,
      reservationItem
    ),
};

export default reservationApi;