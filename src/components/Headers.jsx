import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";




export default function Headers() {
  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
          <h3 className='text-light'>Ecommerce</h3>
          <FaShoppingCart />
        </Container>
      </Navbar>
      <br />
    </>
  )
}
