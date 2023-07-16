import React from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";

export default function Books() {
  const { data: books, isLoading, isSuccess, isError } = useGetBooksQuery();
  let content = null;

  if (!isLoading && books?.length > 0) {
    content = books.map((book) => <Book key={book?.id} book={book} />);
  }
  return (
    <div class="order-2 xl:-order-1">
      <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Book List</h4>

        <div class="flex items-center space-x-4">
          <button class="lws-filter-btn active-filter">All</button>
          <button class="lws-filter-btn ">Featured</button>
        </div>
      </div>
      <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content}
      </div>
    </div>
  );
}
