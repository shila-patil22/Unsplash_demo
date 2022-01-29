import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.unsplash.com/` }),
  endpoints: (builder) => ({
    getUnsplashRecord: builder.query({
      query: ({ entity, query = null }) =>
        `${entity}/?client_id=${accessKey}&query=${query}`
    }),
    getUnsplashSearchPhotos: builder.query({
      query: ({ ...params }) => {
        const { page, query, orientation, order_by } = params;
        let url = `search/photos?client_id=${accessKey}&page=${page}&query=${query}`;
        return {
          url:
            orientation && order_by
              ? `${url}&orientation=${orientation}&order_by=${order_by}`
              : orientation
              ? `${url}&orientation=${orientation}`
              : order_by
              ? `${url}&order_by=${order_by}`
              : `${url}`
        };
      }
    })
  })
});
export const {
  useGetUnsplashRecordQuery,
  useLazyGetUnsplashRecordQuery,
  useLazyGetUnsplashSearchPhotosQuery
} = unsplashApi;
