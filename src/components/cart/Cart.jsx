import { Offcanvas, Button } from 'react-bootstrap';

import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { formatCurrency } from '../../utilities';

function Cart({ isOpen }) {
  const { closeCart, cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const cartItem = cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-uppercase">
          Shopping cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p className="text-info ">Your cart is empty!</p>
        ) : (
          cartItem
        )}
        <div
          className="py-2 d-flex justify-content-between"
          style={{ borderTop: '1px solid rgba(0, 0, 0, 0.125)' }}
        >
          <span className="fw-light fs-4">Total</span>
          <span className="fw-light fs-4">
            {formatCurrency(totalPrice, 'USD')}
          </span>
        </div>
        <Button
          disabled={cartItems.length === 0}
          className="w-100 text-uppercase fw-light"
        >
          Checkout
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
