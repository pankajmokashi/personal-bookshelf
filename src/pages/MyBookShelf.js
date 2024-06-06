import React from "react";
import BookShelf from "../components/BookShelf";

function MyBookShelf() {
  const books = JSON.parse(localStorage.getItem("myBookShelf"));
  return (
    <div className="container">{books && <BookShelf books={books} />}</div>
  );
}

export default MyBookShelf;
