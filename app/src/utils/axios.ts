import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CORE_ENDPOINT,
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance