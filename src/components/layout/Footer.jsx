import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <p
          className="pt-2"
          style={{ borderTop: '1px solid rgba(0, 0, 0, 0.125)' }}
        >
          &copy; Store, {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
