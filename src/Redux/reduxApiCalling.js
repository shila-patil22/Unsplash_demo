import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.unsplash.com/` }),
  endpoints: (builder) => ({
    getUnsplashnByName: builder.query({
      query: () =>
        `topics/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashTopicDesc: builder.query({
      query: (params) =>
        `topics/${params}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashTopicPhotos: builder.query({
      query: (params) =>
        `topics/${params}/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    })
  })
});

export const {
  useGetUnsplashnByNameQuery,
  useGetUnsplashTopicDescQuery,
  useGetUnsplashTopicPhotosQuery
} = unsplashApi;
