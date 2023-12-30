import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "c59aaa0235mshc640aafd8be092ap17028cjsn774461af6e7f",
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

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'c59aaa0235mshc640aafd8be092ap17028cjsn774461af6e7f',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
