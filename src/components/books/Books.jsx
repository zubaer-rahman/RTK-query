import React, { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";
import { useSelector } from "react-redux";

export default function Books() {
  const [activeFilter, setActiveFilter] = useState("all");
  const searchInput = useSelector((state) => state.book.searchInput);
  const { data: books, isLoading, isSuccess, isError } = useGetBooksQuery();
  const [content, setContent] = useState([]);

  const handleClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (!isLoading && books?.length > 0) {
      let filteredBooks = books;

      if (activeFilter === "featured") {
        filteredBooks = filteredBooks.filter((book) => book.featured);
      }

      if (searchInput) {
        filteredBooks = filteredBooks.filter((book) =>
          book.name.toLowerCase().includes(searchInput)
        );
      }

      setContent(
        filteredBooks.map((book) => <Book key={book?.id} book={book} />)
      );
    }
  }, [activeFilter, searchInput, setContent, books, isLoading]);
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleClick("all")}
            className={`lws-filter-btn ${
              activeFilter === "all" && "active-filter"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleClick("featured")}
            className={`lws-filter-btn ${
              activeFilter === "featured" && "active-filter"
            }`}
          >
            Featured
          </button>
        </div>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content}
      </div>
    </div>
  );
}
