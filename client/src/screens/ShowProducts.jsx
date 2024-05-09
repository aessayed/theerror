import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const { data } = await axios.get("api/products/allProducts");
      console.log("Data from API:", data);
      setProducts(data);
    };
    getProductData();
  }, []);
  return (
    <>
      <Container className="justify-content-center mt-2 mb-2 p-2">
        <h1 className="text-center">Show all product</h1>
        <hr />

        <Row>
          <h1>all products</h1>
          {products.map((product) => {
            return (
              <Col md={8} lg={12} sm={12} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowProducts;
