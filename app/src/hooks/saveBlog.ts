import { SaveBlogPayload } from "@/@types/global";
import axiosInstance from "@/utils/axios";
import { useMutation } from "react-query";

export async function saveBlog(payload: SaveBlogPayload) {
  const res = await axiosInstance.post("/blog/new", payload);

  return res.data;
}

export default function useSaveBlog() {
  return useMutation(saveBlog, {
    onSuccess: (data) => {
      return data;
    },
  });
}
