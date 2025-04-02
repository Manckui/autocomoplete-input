// Autocomplete.tsx
import { useState, useEffect, useRef } from "react";
import { AutocompleteProps } from "../types";

const Autocomplete = ({
  placeholder = "Search...",
  onInputChange,
  onSelect,
  suggestions,
  loading,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refWrapper.current &&
        !refWrapper.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const highlightMatch = (text: string) => {
    const index = text.toLowerCase().indexOf(inputValue.toLowerCase());
    if (index === -1) return text;
    return (
      <>
        {text.slice(0, index)}
        <strong>{text.slice(index, index + inputValue.length)}</strong>
        {text.slice(index + inputValue.length)}
      </>
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      const selected = suggestions[highlightedIndex];
      setInputValue(selected.title);
      setShowSuggestions(false);
      setHighlightedIndex(-1);
      onSelect?.(selected);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div className="autocomplete" ref={refWrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          setShowSuggestions(true);
          onInputChange?.(value);
        }}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="autocomplete-input"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="autocomplete-list">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              className={`autocomplete-item ${
                index === highlightedIndex ? "highlighted" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                setInputValue(item.title);
                setShowSuggestions(false);
                setHighlightedIndex(-1);
                onSelect?.(item);
              }}
            >
              {highlightMatch(item.title)}
            </li>
          ))}
        </ul>
      )}
      {showSuggestions &&
        inputValue &&
        !loading &&
        suggestions.length === 0 && (
          <p className="autocomplete-no-results">Nessun risultato trovato</p>
        )}
      {showSuggestions && loading && (
        <p className="autocomplete-loading">Caricamento...</p>
      )}
    </div>
  );
};

export { Autocomplete };
