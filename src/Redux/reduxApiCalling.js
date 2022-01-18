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
        `topics/${params}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashHomePhotos: builder.query({
      query: () =>
        `photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashSearchPhotos: builder.query({
      query: (params) =>
        `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${params}`
    }),
    getUnsplashSearchCollection: builder.query({
      query: (params) =>
        `search/collections?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${params}`
    })
  })
});

export const {
  useGetUnsplashnByNameQuery,
  useGetUnsplashTopicDescQuery,
  useGetUnsplashTopicPhotosQuery,
  useGetUnsplashSearchPhotosQuery,
  useGetUnsplashHomePhotosQuery,
  useGetUnsplashSearchCollectionQuery
} = unsplashApi;
