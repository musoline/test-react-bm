import { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import { ProductInterface } from "../../Interfaces/ProductInterface";

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product: ProductInterface = {
      name,
      category,
      price: Number(price),
    };
    axios.post("http://localhost:3000/products", { ...product }).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="product_name"
        id="product_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Please Enter Name..."
      />
      <input
        type="text"
        name="product_category"
        id="product_category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Please Enter Cat..."
      />
      <input
        type="text"
        name="product_price"
        id="product_price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Please Enter Price..."
      />
      <input type="submit" value="Add Product" />
    </form>
  );
}

export default AddProduct;
