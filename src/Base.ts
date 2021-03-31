import axios, { AxiosInstance } from 'axios'; 


const base : AxiosInstance = axios.create({
    baseURL: "https://locals-fit-be.herokuapp.com"
}); 


export default base;