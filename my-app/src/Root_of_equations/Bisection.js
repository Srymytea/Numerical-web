import {React,Component} from "react";
import { Button,From } from "react-bootstrap";
import { evaluate } from "mathjs";



const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Bisection extends Component{

    Cal_Bisection(){
        var XR = document.getElementById("intput_xr").value; // input xr
        var XL = document.getElementById("intput_xl").value; // input xl
        var equation = document.getElementById("Equation").value; // input สมการ
        var xr = parseFloat(XR); // change Number_XR to float
        var xl = parseFloat(XL);
        var scope; // key
        var xm, fxm, fxl, fxr;
        var epsilon = 0.000001
        
        do{
            xm = (xl + xr) / 2;

            scope = { x:xr }; // input xr to x เพื่อนำไปใช้
            fxr = evaluate(equation, scope); // equation คือ สมการ // ใช้ scope เพื่อ evaluate ต้องใช้ x , xr ไม่ใช่ x

            scope = { x:xm };
            fxl = evaluate(equation, scope);
            
            if(fxm * fxr < 0){
                xl = xm;
            }
            else if(fxm * fxr > 0){
                xr = xm;
            }
        }
        while(Math.abs(fxm) >= epsilon);

        document.getElementById("answer").innerHTML=xm; // ดึงข้อมูล getElement ไปใส่ในans // print html คือ xm

    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Bisection</h1>
                        <br/><br/>

                        <div>
                            <From.Control id= "Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto", marginLeft:"10px"}}></From.Control>
                            <br/>
                            <From.Control id= "input_xl" type="number" placeholder="input XL" style={{width:"10%", margin:"0 auto", marginLeft:"10px"}}></From.Control>
                            <From.Control id= "input_xr" type="number" placeholder="input XR" style={{width:"10%", margin:"0 auto", marginLeft:"10px"}}></From.Control>
                        </div>
                        <br/>
                    
                        <Button onClick={this.Cal_Bisection} style={{wideth:"10", margin:"0 auto"}}> Calculate</Button>
                        <br/><br/>
                        <h id="answer"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bisection;