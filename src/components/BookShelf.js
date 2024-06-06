import React from "react";
import Book from "./Book";

function BookShelf({ books, showButton }) {
  return (
    <div className="bookshelf">
      {books.map((book) => (
        <Book book={book} key={book.key} showButton={showButton} />
      ))}
      {books.length === 0 && <div>No books added to bookshelf!</div>}
    </div>
  );
}

export default BookShelf;
