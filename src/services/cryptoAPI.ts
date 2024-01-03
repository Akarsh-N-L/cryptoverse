import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const createRequests = (url: string) => ({ url, headers });

export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (coins) => createRequests(`/coins?limit=${coins}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoAPI;
