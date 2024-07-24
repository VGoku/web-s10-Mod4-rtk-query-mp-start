// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const quotesApi = createApi({
    reducerPath: "quotesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/api/" }),
    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => "quotes",

        }),
        createQuote: builder.mutation({

        }),
        toggleQuote: builder.mutation({

        }),
        deleteQuote: builder.mutation({

        })
    })
})

export const {
    useGetQuotesQuery,
    useCreateQuoteMutation,
    useToggleQuoteMutation,
    useDeleteQuoteMutation,
  } = quotesApi;