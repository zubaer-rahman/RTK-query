import React from 'react'
import Form from './Form'
import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../features/api/apiSlice';

export default function EditBook() {
    const { bookId } = useParams();
    const { data: book, isLoading, isError, isSuccess } = useGetBookQuery(bookId);

    let content = null;
    if(isSuccess && book?.id){
        content = <Form book={book} />
    }

  return (
    <div class="container">
        <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
  )
}
