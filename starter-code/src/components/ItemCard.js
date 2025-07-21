import React from "react";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={require(`../assets/${book.cover}`)}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;
