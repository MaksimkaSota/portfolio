import axios, { type AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SENDEMAIL_SERVER_LINK as string,
});
