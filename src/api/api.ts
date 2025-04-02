import { Item } from "../types";

export const fetchSuggestions = async (query: string): Promise<Item[]> => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("Data fetched:", data);

    const results = data.products
      .filter((product: Item) =>
        product.title?.toLowerCase().includes(query.toLowerCase())
      )
      .map((product: Item) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        brand: product.brand,
        category: product.category,
      }));

    return results;
  } catch (error) {
    console.error("Errore nella fetch:", error);
    return [];
  }
};
