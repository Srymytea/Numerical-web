import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Polynomial = () => {
  const Calpolynomial = (xval, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) => {
    const l1 = ((x2-xval)*(x3-xval)*(x4-xval)*(x5-xval))/((x2-x1)*(x3-x1)*(x4-x1)*(x5-x1));
    const l2 = ((x1-xval)*(x3-xval)*(x4-xval)*(x5-xval))/((x1-x2)*(x3-x2)*(x4-x2)*(x5-x2));
    const l3 = ((x1-xval)*(x2-xval)*(x4-xval)*(x5-xval))/((x1-x3)*(x2-x3)*(x4-x3)*(x5-x3));
    const l4 = ((x1-xval)*(x2-xval)*(x3-xval)*(x5-xval))/((x1-x4)*(x2-x4)*(x3-x4)*(x5-x4));
    const l5 = ((x1-xval)*(x2-xval)*(x3-xval)*(x4-xval))/((x1-x5)*(x2-x5)*(x3-x5)*(x4-x5));
    const fx = l1*y1+l2*y2+l3*y3+l4*y4+l5*y5;
    sety(fx);
  };

  const [xvalue, setxvalue] = useState(0);
  const [y, sety] = useState(0);
  const [x1, setx1] = useState(0);
  const [x2, setx2] = useState(0);
  const [x3, setx3] = useState(0);
  const [x4, setx4] = useState(0);
  const [x5, setx5] = useState(0);

  const [y1, sety1] = useState(0);
  const [y2, sety2] = useState(0);
  const [y3, sety3] = useState(0);
  const [y4, sety4] = useState(0);
  const [y5, sety5] = useState(0);
  

  const inputxvalue = (event) => {
    setxvalue(event.target.value);
  };

  const inputx1 = (event) => {
    setx1(event.target.value);
  };

  const inputy1 = (event) => {
    sety1(event.target.value);
  };

  const inputx2 = (event) => {
    setx2(event.target.value);
  };

  const inputy2 = (event) => {
    sety2(event.target.value);
  };

  const inputx3 = (event) => {
    setx3(event.target.value);
  };

  const inputy3 = (event) => {
    sety3(event.target.value);
  };

  const inputx4 = (event) => {
    setx4(event.target.value);
  };

  const inputy4 = (event) => {
    sety4(event.target.value);
  };

  const inputx5 = (event) => {
    setx5(event.target.value);
  };

  const inputy5 = (event) => {
    sety5(event.target.value);
  };

  const calculateRoot = () => {
    const x1Value = parseFloat(x1);
    const x2Value = parseFloat(x2);
    const x3Value = parseFloat(x3);
    const x4Value = parseFloat(x4);
    const x5Value = parseFloat(x5);

    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);
    const y3Value = parseFloat(y3);
    const y4Value = parseFloat(y4);
    const y5Value = parseFloat(y5);

    Calpolynomial(xvalue,x1Value,y1Value,x2Value,y2Value,x3Value,y3Value, x4Value, y4Value, x5Value, y5Value);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Input xvalue</Form.Label>
          <input type="text" id="xvalue" value={xvalue} onChange={inputxvalue} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input X1</Form.Label>
          <input type="number" id="x1" onChange={inputx1} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y1</Form.Label>
          <input type="number" id="y1" onChange={inputy1} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input X2</Form.Label>
          <input type="number" id="x2" onChange={inputx2} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y2</Form.Label>
          <input type="number" id="y2" onChange={inputy2} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input X3</Form.Label>
          <input type="number" id="x3" onChange={inputx3} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y3</Form.Label>
          <input type="number" id="y3" onChange={inputy3} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          
          <Form.Label>Input X4</Form.Label>
          <input type="number" id="x4" onChange={inputx4} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y4</Form.Label>
          <input type="number" id="y4" onChange={inputy4} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          
          <Form.Label>Input X5</Form.Label>
          <input type="number" id="x5" onChange={inputx5} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
          <Form.Label>Input Y5</Form.Label>
          <input type="number" id="y5" onChange={inputy5} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
        
        </Form.Group>
        <Button variant="dark" onClick={calculateRoot}>
          Calculate
        </Button>
      </Form>
      <br></br>
      <h5>Answer = {y}</h5>
    </Container>
  );
};

export default Polynomial;