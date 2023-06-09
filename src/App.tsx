import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./components/product/Product";
import { ProductInterface } from "./Interfaces/ProductInterface";
import AddProduct from "./components/addProduct/AddProduct";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <AddProduct />
      <div className="products">
        {products &&
          (products as ProductInterface[]).map((el) => (
            <Product key={el.id} item={el} />
          ))}
      </div>
    </>
  );
}

export default App;
