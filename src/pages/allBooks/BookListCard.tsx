import React from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  book: {
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    publicationMonth: string;
    _id: string;
  };
};

const BookListCard: React.FC<CardProps> = ({ book }) => {
  const { title, author, genre, publicationYear, publicationMonth, _id: id } = book;

  return (
    <Link to={`/all-books/${id}`}>
      <div className="text-secondary max-w-xs rounded overflow-hidden hover:bg-cyan-50/25 shadow-card hover:shadow-card-hover bg-white h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title : {title}</div>
          <p className="text-base mb-2">
            <span className="font-semibold">Author:</span> {author}
          </p>
          <p className="text-base mb-2">
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p className=" text-base">
            <span className="font-semibold">Publication Time:</span> {publicationMonth},{' '}
            {publicationYear}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookListCard;
