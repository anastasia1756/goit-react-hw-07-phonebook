import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626d3e6150a310b8a34c4691.mockapi.io/api/v1/',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addPost: build.mutation({
      query: body => ({
        url: `contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeletePostMutation,
  useAddPostMutation,
} = contactsApi;
