import React, { useState } from "react";
import Button from "./Button";

function Book({ book, showButton }) {
  const [addedToShelf, setAddedToShelf] = useState(false);

  const handleOnClick = (book) => {
    let myBookShelf = JSON.parse(localStorage.getItem("myBookShelf")) || [];
    myBookShelf.push(book);
    localStorage.setItem("myBookShelf", JSON.stringify(myBookShelf));
    setAddedToShelf(true);
  };
  
  return (
    <div className="book">
      <div className="info">
        <div className="title">Book Title: </div>
        <div className="value">{book.title}</div>
      </div>
      <div className="info">
        <div className="title">Auther: </div>
        <div className="value">
          {book.author_name.map((name) => name + ", ")}
        </div>
      </div>
      <div>Edition Count: {book.edition_count}</div>
      {showButton && (
        <Button
          onClick={() => handleOnClick(book)}
          disabled={addedToShelf}
          value={addedToShelf ? "Added to Shelf" : "Add to Shelf"}
          classname={addedToShelf ? "grey" : "green"}
        />
      )}
    </div>
  );
}

export default Book;
