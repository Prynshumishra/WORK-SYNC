import React from "react";

export default function SearchBar({ placeholder, searchTerm, onSearch }) {
  return (
    <div className="m-4">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
