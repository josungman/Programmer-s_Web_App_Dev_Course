import { create } from "apisauce";


const baseURL = 'http://127.0.0.1:8000'


export const API = create({

  baseURL,
  withCredentials: true
})