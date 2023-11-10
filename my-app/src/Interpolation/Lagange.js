import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";




const Lagrange =()=>{
    const data = [
        {index: 1, X:0, Y:9.81},
        {index: 2, X:20000,Y:9.7487},
        {index: 3, X:40000, Y:9.6879},
        {index: 4, X:60000, Y:9.6879},
        {index: 5, X:80000,Y:9.5682}
    ]
    const chartOptions = {
        chart: {
          id: "lagrange-chart",
        },
        xaxis: {
          categories: data.map((element) => element.X),
        },
      };
    const series = [
        {
          name: "Y",
          data: data.map((element) => element.Y),
        },
      ];
    const data2 =[];

    const print = () =>{
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th width="50%">L</th>
                        <th width="50%">f(x)</th>
                    </tr>
                </thead>
                <tbody>
                    {data2.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>L{element.Iteration} = {element.L}</td>
                            <td>{element.Ans}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        );
    }

    const [html, setHtml] = useState(null)
    const [N,setN] = useState(0)
    const [Xcal,setXcal] = useState(0)
    const [X,setX] = useState(0)//เก็บค่า X ที่ผู้ใช้ป้อน
    const Index = new Array(N);

    const calLagrange = () => {
        const L = new Array(N);
        let ans = 0;
        let obj = {}; 
        data2.length = 0; 
      
        for (let i = 0; i < N; i++) {
          let up = 1;
          let down = 1;
          for (let j = 0; j < N; j++) {
            if (i !== j) {
              up *= (X - data[Index[j]].X);
              down *= (data[Index[i]].X - data[Index[j]].X);
            }
          }
      
          if (down === 0) {
            // check diveider
            console.error("divide not zero");
            continue;
          }
      
          L[i] = up / down;
          ans += L[i] * data[Index[i]].Y;
      
          obj = { 
            Iteration: i + 1,
            L: L[i],
            Ans: ans
          };
          data2.push(obj); 
        }
      
        setXcal(ans); 
      };
      

    const inputX = (event) =>{ 
        console.log(event.target.value) 
        setX(event.target.value)
    }
    const [pointType, setPointType] = useState(""); 

    const calculateRoot = () => {
        var n = parseInt(N);
        var Xcalnum = parseFloat(Xcal);
    
        let pointType = "";
    
        if (n === 2) {
            pointType = "linear";
        } else if (n === 3) {
            pointType = "quadratic";
        } else {
            pointType = "polynomial";
        }
    
        for (var i = 0; i < n; i++) {
            Index[i] = (document.getElementById(i).value) - 1;
        }
    
        console.log(Index);
        calLagrange(Xcalnum);
        console.log(data2);
    
        setHtml(print());
        setPointType(pointType); 
    }
    

    const createInput=(event)=>{ //ใช้เพื่อให้ gen ช่อง n
        var InputString="";
        setN(event.target.value)
        var Size = event.target.value;
       
        for(var i=0;i<Size;i++){
            InputString+="<input type='number' id='"+i+"' style='width:20%, margin:0 auto'className='form-control'/>"
            
        }
        document.getElementById("NumberInput").innerHTML=InputString;
    }
    
    return (
            <Container>
                <h1>Lagrange Interpolation Method</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="20%">Position</th>
                            <th width="40%">X</th>
                            <th width="40%">Y</th>
                        </tr>
                    </thead>
                <tbody>
                    {data.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>{element.index}</td>
                            <td>{element.X}</td>
                            <td>{element.Y}</td>
                        </tr>)
                    })}
                </tbody>
                </Table>
                <Container>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Input number of point</Form.Label><br></br>
                                <Form.Label>linear(2 point), quadratic(3 point), polynomial(n point)</Form.Label>
                                <input type="number" id="N" onChange={createInput} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                            </Form.Group>
                                <div id="NumberInput"></div>
                            <br></br>
                                <Form.Label>Input X</Form.Label>
                                <input type="number" id="X" onChange={inputX} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                            <br></br>
                            <Button variant="dark" onClick={calculateRoot}>
                                Calculate
                            </Button>
                        </Form>
                        <br></br>
                        <h5>Answer = {Xcal.toPrecision(7)}</h5>
                        <h5>{N} point is {pointType}</h5> {/* แสดงประเภทของจุดที่ผู้ใช้เลือก */}
                        <Container>
                        {html}
                        </Container>
                        <Container>
        <ReactApexChart options={chartOptions} series={series} type="line" height={350} />
      </Container>

                </Container>
            </Container> 
    )
}

export default Lagrange