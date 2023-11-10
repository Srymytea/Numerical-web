import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { evaluate } from "mathjs";
import ReactApexCharts from "react-apexcharts";

const mainDiv = {
  display: "flex",
  width: "100%",
  margin: "0 auto",
};

const Div = {
  width: "100%",
  margin: "0 auto",
};

class Bisection extends Component {
  Cal_Bisection() {
    var XR = Number(document.getElementById("input_xr").value);
    var XL = Number(document.getElementById("input_xl").value);
    var equation = document.getElementById("Equation").value;
    var xr = parseFloat(XR);
    var xl = parseFloat(XL);
    var scope;
    var xm, yl, yr, ym;
    var itermax = 50;
    var iter = 0;

    // สร้างตัวแปรสำหรับเก็บข้อมูลที่จะแสดงในตาราง
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // เคลียร์ข้อมูลที่มีอยู่เดิม

    do {
      xm = (xl + xr) / 2;
      scope = { x: xr };
      yr = evaluate(equation, scope);
      scope = { x: xm };
      ym = evaluate(equation, scope);
      iter++;

      if (ym * yr < 0) {
        xl = xm;
      } else if (ym * yr > 0) {
        xr = xm;
      }

      // เพิ่มข้อมูลลงในตาราง
      var row = tableBody.insertRow();
      row.insertCell(0).innerHTML = iter;
      row.insertCell(1).innerHTML = xl;
      row.insertCell(2).innerHTML = xr;
      row.insertCell(3).innerHTML = xm;
      row.insertCell(4).innerHTML = yl;
      row.insertCell(5).innerHTML = yr;
      row.insertCell(6).innerHTML = ym;
    } while (Math.abs(ym) >= 0.000001);

    document.getElementById("ans").innerHTML = xm;

    scope = { x: xm };
    var value = evaluate(equation, scope);
    document.getElementById("val").innerHTML = value;
  }

  render() {
    return (
      <div>
        <div style={mainDiv}>
          <div style={Div}>
            <div className="graph">
              <h1>Bisection</h1>
              <br />
              <br />

              <div>
                <Form.Control
                  id="Equation"
                  type="text"
                  placeholder="input Equation"
                  style={{ width: "10%", margin: "0 auto" }}
                ></Form.Control>
                <br />
                <Form.Control
                  id="input_xl"
                  type="number"
                  placeholder="input XL"
                  style={{ width: "10%", margin: "0 auto" }}
                ></Form.Control>
                <Form.Control
                  id="input_xr"
                  type="number"
                  placeholder="input XR"
                  style={{ width: "10%", margin: "0 auto" }}
                ></Form.Control>
              </div>
              <br />
            </div>

            <div className="button">
              <Button
                onClick={this.Cal_Bisection}
                style={{ width: "10", margin: "0 auto" }}
              >
                {" "}
                Calculate{" "}
              </Button>
              <br />
              <br />
              <h id="ans"></h>
              <br />
              <br />
              <h id="val"></h>
              <br />
              <br />

              {/* เพิ่มตารางที่แสดงข้อความ */}
              <table border="1">
                <thead>
                  <tr>
                    <th>Iteration</th>
                    <th>XL</th>
                    <th>XR</th>
                    <th>XM</th>
                    <th>YL</th>
                    <th>YR</th>
                    <th>YM</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  {/* ข้อมูลจะถูกเพิ่มที่นี่ */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bisection;
