import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Component } from 'react'
import skyline from '../assets/skyline5.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${skyline}) no-repeat ;
    background-size: cover;
    color: #efefef;
    height: 450px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  h1{
    color: white;
    font-size: 3rem;
  }
`;



export default class Jumbotron extends Component {
    render() {
        return (
            <Styles>
            <Jumbo fluid className="jumbo">
              <div className="overlay"></div>
              <Container>
                <h1>Cincinnati Hometown a.k.a Da 513 Suckaz'</h1>
                
                <p>The Heart of Ohio Bitches.</p>
              </Container>
            </Jumbo>
          </Styles>
        )
    }
}
