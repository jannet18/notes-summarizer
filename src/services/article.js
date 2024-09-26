import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-Rapidapi-Key", rapidApiKey),
        headers.set(
          "X-Rapidapi-Host",
          "article-extractor-and-summarizer.p.rapidapi.com"
        );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarise?url=${params.articleUrl}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
