import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    getRelatedVideos: builder.query({
      //?title_like=tailwind&_limit=1
      query: (title) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&_limit=4`
        return queryString;
      },
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery} = apiSlice;
