import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="mb-3">
              <Container fluid>
              
                
                

                {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />   */}

                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end">
                  
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    
                    <NavDropdown
                      title="Root_of_equation"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Graphical">Graphical</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Onepoint">Onepoint</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Divider />
                        
                      </NavDropdown>


                      <NavDropdown
                        title="Interpolation"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        <NavDropdown.Item href="/Newton">Newton Raphson</NavDropdown.Item>
                        <br/>  
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                        <NavDropdown.Divider />

                      </NavDropdown>

                      <NavDropdown
                        title="Guass"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                          <NavDropdown.Item href="/Gauss_Elimination">Gauss Elimination</NavDropdown.Item>
                          <br/>
                      </NavDropdown>
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                
              </Container>
            </Navbar>
          ))}
        </>
      );
}
