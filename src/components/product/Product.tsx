import "./Product.css";
import { useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
interface Props {
  item: ProductInterface;
}

function Product(props: Props) {
  const [product] = useState(props.item);

  return (
    <div className="product">
      <div className="name">
        <span>Name: </span>
        {product.name}
      </div>
      <div className="category">
        <span>Category:</span>
        {product.category}
      </div>
      <div className="price">Price{product.price}</div>
    </div>
  );
}

export default Product;
