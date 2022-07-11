import { Button, Container, Navbar } from 'react-bootstrap';

import { useCart } from '../../context/CartContext';

function Header() {
  const { cartQuantity, openCart } = useCart();

  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Navbar.Brand>
          <h1>Store</h1>
        </Navbar.Brand>
        <Button
          onClick={openCart}
          style={{ width: '2.7rem', height: '2.7rem', position: 'relative' }}
          variant="outline-primary"
          className="rounded-circle d-flex justify-content-center  align-items-center"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z"></path>
          </svg>
          <span
            className="p-2 fw-light rounded-circle bg-warning d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.2rem',
              height: '1.2rem',
              position: 'absolute',
              fontSize: '.7rem',
              top: 0,
              right: 0,
              transform: 'translate(25%, -25%)'
            }}
          >
            {cartQuantity}
          </span>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
