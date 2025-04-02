export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  brand: string;
  category: string;
}

export interface AutocompleteProps {
  placeholder?: string;
  onInputChange?: (value: string) => void;
  onSelect?: (item: Item) => void;
  suggestions: Item[];
  loading: boolean;
}
