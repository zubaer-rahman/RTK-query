import React, { useState } from "react";
import { useAddBookMutation } from "../../features/api/apiSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [featured, setFeatured] = useState(false);

  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice(0);
    setRating(0);
    setFeatured(false);
  };
  const handleSubmit = async () => {
    await addBook({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
    resetForm();
  };
  return (
    <form class="book-form" onSubmit={handleSubmit}>
      <div class="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          class="text-input"
          type="text"
          id="lws-bookName"
          name="name"
        />
      </div>

      <div class="space-y-2">
        <label for="lws-author">Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
          class="text-input"
          type="text"
          id="lws-author"
          name="author"
        />
      </div>

      <div class="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
          required
          class="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
        />
      </div>

      <div class="grid grid-cols-2 gap-8 pb-4">
        <div class="space-y-2">
          <label for="lws-price">Price</label>
          <input
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            required
            class="text-input"
            type="number"
            id="lws-price"
            name="price"
          />
        </div>

        <div class="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            onChange={(e) => setRating(Number(e.target.value))}
            value={rating}
            required
            class="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
          />
        </div>
      </div>

      <div class="flex items-center">
        <input
          onChange={(e) => setFeatured(!featured)}
          value={featured}
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
        />
        <label for="lws-featured" class="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
      {isSuccess && <p>book added successfully!</p>}
    </form>
  );
}
