import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';

const Footer = () => {
  return (
    <div>
      <footer className='py-5 bg-dark'>
        <Container>
          <p className='m-0 text-center text-white'>Copyright © Your Website 2022</p>
        </Container>
      </footer>
    </div>
  )
}

export default Footer