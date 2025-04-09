import { useEffect, useRef, useState } from "react";
import { Autocomplete } from "./components";
import { fetchSuggestions } from "./api";
import { Item } from "./types";
import "./styles.scss";
import ProductCard from "./components/productCard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!inputValue) {
      setResults([]);
      setLoading(false);
      return;
    }

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    setLoading(true);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(inputValue).then((data) => {
        setResults(data);
        setLoading(false);
      });
    }, 300);
  }, [inputValue]);

  const filteredList = selectedItem
    ? results.filter((item) => item.id === selectedItem.id)
    : results;

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Autocomplete</h1>
        <Autocomplete
          placeholder="Cerca un prodotto..."
          onInputChange={(value) => {
            setInputValue(value);
            setSelectedItem(null);
          }}
          onSelect={(item) => setSelectedItem(item)}
          suggestions={results}
          loading={loading}
        />
      </div>

      <div className="box-item">
        <h2>prodotti corrispondenti:</h2>
        {filteredList.length > 0 ? (
          <ul className="product-list">
            {filteredList.map((item) => (
              <li key={item.id} className="product-item">
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">Nessun prodotto trovato.</p>
        )}
      </div>
    </div>
  );
}

export default App;
