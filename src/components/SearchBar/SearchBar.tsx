import React, { useState } from "react";
import styles from "./SearchBat.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value);
  }

  function handleSearch() {
    onSearch(query);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={query}
        placeholder="Search images..."
      />
      <button className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
