import { Item } from "../types";

interface ProductCardProps {
  product: Item;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-brand">
          Marca: <strong>{product.brand}</strong>
        </p>
        <p className="product-category">
          Categoria: <strong>{product.category} </strong>
        </p>
        <p className="product-price">€{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
