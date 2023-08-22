import { useQuery } from "react-query"
import axios from 'axios'

async function getAllBlogs() {
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:9000/blog'
    })
    console.log('cein')
    return res.data


}


export default function useGetAllBlogs() {
    return useQuery('getAllBlogs', getAllBlogs)
}