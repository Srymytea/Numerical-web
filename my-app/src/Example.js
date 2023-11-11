// Example.js
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

const Example = () => {
  const [equation, setEquation] = useState("");
  const [Xl, setXl] = useState(0);
  const [Xr, setXr] = useState(0);

  const insertExample = () => {
    axios.get("http://localhost:3002/example")
      .then((response) => {
        const example = response.data;
        const data = example.find((item) => item.method === "Lagrange");
        if (data) {
          setEquation(data.equation);
          setXl(data.x1);
          setXr(data.x2);
        } else {
          console.log("Can not find method");
        }
      });
  };

  return (
    <Container>
      {/* ... ส่วนอื่น ๆ ของคอมโพเนนต์ */}
      <Button onClick={insertExample}>Example</Button>
    </Container>
  );
};

export default Example;
