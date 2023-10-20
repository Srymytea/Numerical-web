import { React,Component } from"react";
import {Button,Form} from"react-bootstrap";
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
        var XR = document.getElementById("input_xr").value
        var XL = document.getElementById("input_xl").value;
        var equation = document.getElementById("Equation").value;
        var xr = parseFloat(XR);
        var xl = parseFloat(XL);
        var scope;
        var xm, fxl, fxr, fxm;
        var epsilon = 0.000001;
    
        do{
            xm = (xl + xr) / 2;
            scope = { x:xr };
            fxr = evaluate(equation, scope);
            scope = { x:xm };
            fxm = evaluate(equation, scope);
            

            if(fxm * fxr < 0){
                xl = xm;
            }
            else if(fxm * fxr > 0){
                xr = xm;
            }
        }
        while(Math.abs(fxm) >= epsilon);

        document.getElementById("answer").innerHTML=xm;
    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1>Bisection</h1>
                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="input_xl" type="number" placeholder="input XL" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                            <Form.Control id="input_xr" type="number" placeholder="input XR" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <Button onClick={this.Cal_Bisection} style={{width:"10", margin:"0 auto"}}> Calculate </Button>
                        <br/><br/>
                        <h id="answer"></h>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bisection;