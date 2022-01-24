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
    getUnsplashSearchCollection: builder.query({
      query: (params) =>
        `search/collections?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=${params}`
    }),
    getUnsplashSearchPhotos: builder.query({
      query: (params) => {
        let url = `search/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${params.page}&query=${params.query}`;
        return {
          url:
            params.orientation && params.order_by
              ? `${url}&orientation=${params.orientation}&order_by=${params.order_by}`
              : params.orientation
              ? `${url}&orientation=${params.orientation}`
              : params.order_by
              ? `${url}&order_by=${params.order_by}`
              : `${url}`
        };
      }
    }),
    getUnsplashCollectionImgs: builder.query({
      query: (params) =>
        `collections/${params}/photos?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashPhotoDetails: builder.query({
      query: (params) =>
        `photos/${params}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    }),
    getUnsplashRelatedCollection: builder.query({
      query: (params) =>
        `photos/${params}/related?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    })
  })
});
export const {
  useGetUnsplashnByNameQuery,
  useGetUnsplashTopicDescQuery,
  useGetUnsplashTopicPhotosQuery,
  useGetUnsplashHomePhotosQuery,
  useLazyGetUnsplashSearchPhotosQuery,
  useGetUnsplashSearchCollectionQuery,
  useGetUnsplashCollectionImgsQuery,
  useLazyGetUnsplashPhotoDetailsQuery,
  useLazyGetUnsplashRelatedCollectionQuery
} = unsplashApi;
