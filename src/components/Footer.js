import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container, Footer, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const Styles = styled.div`
  
a {
   margin-right: 50%;
  color: black;
}

ul{
  text: black;
  text-align: center;
}
`;

const FooterPage = () => {
  return (
    <div color="black" className="font-small pt-4 mt-4">
      <Container fluid className="text-center">
        <Row>
          <Col md="4">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col md="4">
            <h5 className="title">Some other stuff to do</h5>
            <ul className="text-center pr-5">
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5 className="title">Some stuff to see or do</h5>
            <ul className="text-center pr-5">
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> JAMIEPHILCONOR </a>
        </Container>
      </div>
    </div>
  );
}

export default FooterPage;