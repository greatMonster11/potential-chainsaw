import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const HomeScreen = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
      setLoading(false);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  if (loading) {
    return <h1>Loading !!!!</h1>;
  }

  return (
    <ul className="products">
      {products.map(product => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReiews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
