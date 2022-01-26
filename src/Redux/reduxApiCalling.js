import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.unsplash.com/` }),
  endpoints: (builder) => ({
    getUnsplashnByName: builder.query({
      query: ({ params, query = null }) =>
        `${params}/?client_id=${accessKey}&query=${query}`
    }),
    getUnsplashSearchPhotos: builder.query({
      query: (params) => {
        let url = `search/photos?client_id=${accessKey}&page=${params.page}&query=${params.query}`;
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
    })
  })
});
export const {
  useGetUnsplashnByNameQuery,
  useLazyGetUnsplashnByNameQuery,
  useLazyGetUnsplashSearchPhotosQuery
} = unsplashApi;
