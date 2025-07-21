import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BookCard from "./ItemCard";
import searchData from "../data/searchData.json"; // Link to the books and authors data

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(searchData);

  // Filter books based on search term
  useEffect(() => {
    const results = searchData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  return (
    <div className="search-container">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="results">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
