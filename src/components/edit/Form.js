import { useState } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form({ video }) {
  const [editVideo, { data: editedVideo, isLoading, isError, isSuccess }] =
    useEditVideoMutation();
  const {
    id,
    title: initialTitle,
    author: initialAuthor,
    description: initialDescription,
    link: initialLink,
    thumbnail: initialThubnail,
    date: initialDate,
    duration: initialDuration,
    views: initialViews,
  } = video;
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [description, setDescription] = useState(initialDescription);
  const [link, setLink] = useState(initialLink);
  const [thumbnail, setThumbnail] = useState(initialThubnail);
  const [date, setDate] = useState(initialDate);
  const [duration, setDuration] = useState(initialDuration);
  const [views, setViews] = useState(initialViews);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({
      id: id,
      data: {
        title,
        description,
        author,
        date,
        duration,
        views,
        link,
        thumbnail,
      },
    });
  };
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  title="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="Thumbnail"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <TextInput
                  title="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Views"
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Video was edited successfully!" />}
        {isError && <Error message="There was an error editing!" />}
      </div>
    </form>
  );
}
