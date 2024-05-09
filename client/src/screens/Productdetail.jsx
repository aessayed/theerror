import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Productdetail = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("0");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        const { data } = await axios.get(`api/products/${id}`);
        console.log("Data from API:", data);
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Error fetching product data. Please try again later.");
      }
    };
    if (id) {
      getSingleProductData();
    }
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      <Card className="bg-light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {id}</Card.Title>

          <Card.Title>Title: {title}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Link to={`/product/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
          <Link to={`/product/${id}`}>
            <Button>Delete</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productdetail;
