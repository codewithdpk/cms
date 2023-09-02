import { Blog } from "@/@types/global";
import axiosInstance from "@/utils/axios";
import { useQuery } from "react-query";


export async function getAllBlogs() {
    const res = await axiosInstance.get('/blog')

    return res.data
}


export default function useGetAllBlogs() {
    return useQuery<Blog[]>('getAllBlogs', getAllBlogs)
}