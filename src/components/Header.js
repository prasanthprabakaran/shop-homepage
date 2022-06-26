import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/esm/Container';

const Header = () => {
  return (
    <header className='bg-dark py-5'>
        <Container className='px-4 px-lg-5 my-5'>
            <div className='text-center text-white'>
                <h1 className='display-4 fw-bolder'>Shop in style</h1>
                <p className='lead fw-normal text-white-50 mb-0'>With this shop homepage template</p>
            </div>
        </Container>
    </header>
  )
}

export default Header