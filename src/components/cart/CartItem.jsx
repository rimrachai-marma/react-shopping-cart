import { Stack, Button } from 'react-bootstrap';

import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utilities';

function CartItem({ id, name, price, image, quantity }) {
  const { increaseItem, decreaseItem, removeItem } = useCart();

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="py-2 d-flex align-items-center"
    >
      <img
        src={image}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>{name}</div>
        <div className="fs-5">
          {formatCurrency(price * quantity, 'USD')}
          <span className="text-muted" style={{ fontSize: '.7rem' }}>
            ({price}/item)
          </span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => increaseItem({ id })}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="blue"
          >
            <path d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
          </svg>
        </Button>
        <span>{quantity}</span>
        <Button variant="outline" size="sm" onClick={() => decreaseItem(id)}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="blue"
          >
            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        </Button>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
        </svg>
      </Button>
    </Stack>
  );
}

export default CartItem;
