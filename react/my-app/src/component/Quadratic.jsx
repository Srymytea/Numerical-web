import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Quadratic = () => {
  const Calquadartic = (xval,x1,y1,x2,y2,x3,y3) => {
    const l1 = ((x2-xval)*(x3-xval))/((x2-x1)*(x3-x1));
    const l2 = ((x1-xval)*(x3-xval))/((x1-x2)*(x3-x2));
    const l3 = ((x1-xval)*(x2-xval))/((x1-x3)*(x2-x3));
    const fx = l1*y1+l2*y2+l3*y3;
    sety(fx);
  };

  const [xvalue, setxvalue] = useState(0);
  const [y, sety] = useState(0);
  const [x1, setx1] = useState(0);
  const [x2, setx2] = useState(0);
  const [x3, setx3] = useState(0);
  const [y1, sety1] = useState(0);
  const [y2, sety2] = useState(0);
  const [y3, sety3] = useState(0);

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

  const calculateRoot = () => {
    const x1Value = parseFloat(x1);
    const x2Value = parseFloat(x2);
    const x3Value = parseFloat(x3);
    const y1Value = parseFloat(y1);
    const y2Value = parseFloat(y2);
    const y3Value = parseFloat(y3);

    Calquadartic(xvalue,x1Value,y1Value,x2Value,y2Value,x3Value,y3Value);
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

export default Quadratic;