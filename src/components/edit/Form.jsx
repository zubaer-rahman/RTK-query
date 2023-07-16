import React, { useEffect, useState } from "react";
import { useUpdateBookMutation } from "../../features/api/apiSlice";

export default function Form({ book }) {
  const {
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
    id,
  } = book;
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

  const [updateBook, { data: updatedBook, isLoading, isError, isSuccess }] =
    useUpdateBookMutation();
  const handleUpdate = (e) => {
    e.preventDefault();
    updateBook({
      id: id,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      },
    });
  };

  return (
    <form class="book-form" onSubmit={handleUpdate}>
      <div class="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          required
          value={name}
          class="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-author">Author</label>
        <input
          required
          value={author}
          class="text-input"
          type="text"
          id="lws-author"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          required
          value={thumbnail}
          class="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div class="grid grid-cols-2 gap-8 pb-4">
        <div class="space-y-2">
          <label for="lws-price">Price</label>
          <input
            required
            value={price}
            class="text-input"
            type="number"
            id="lws-price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            required
            defaultValue={rating}
            class="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div class="flex items-center">
        <input
          value={featured}
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
          onChange={(e) => setFeatured(e.target.value)}
        />
        <label for="lws-featured" class="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" disabled={isLoading} class="submit" id="lws-submit">
        Update Book
      </button>
    </form>
  );
}
