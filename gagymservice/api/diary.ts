import axios from "axios";

export interface DiaryPagingResponse {
  content: DiaryItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface DiaryItemResponse {
  id: number;
  memberName: string;
  diaryMorning: string; 
  diaryLunch: string;
  diaryDinner: string;
  diaryRoutine: string;
  diaryRequest: string;
  trainerName: string;
  trainerFeedback: string;
  diaryCreateTime: number;

}
export interface DiaryItemRequest {
  memberName: string;
  diaryMorning: string;
  diaryLunch: string;
  diaryDinner: string;
  diaryRoutine: string;
  diaryRequest: string;
  trainerName: string;
  trainerFeedback: string;
  //diaryCreateTime: number;
}

const diaryApi = {

  fetch: () =>
  axios.get<DiaryItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/diary`),

  fetchPaging: (page: number, size: number) =>
    axios.get<DiaryPagingResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/diary`
    ),


  add: (diaryItem: DiaryItemRequest) =>
    axios.post<DiaryItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/diary`,
      diaryItem
    ),

  remove: (id: number) =>
    axios.delete<boolean>(`${process.env.NEXT_PUBLIC_API_BASE}/diary/${id}`),


  modify: (id: number, diaryItem: DiaryItemRequest) =>
    axios.put<DiaryItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/diary/${id}`,
      diaryItem
    )
};

export default diaryApi;