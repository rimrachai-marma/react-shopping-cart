import { Button, Card } from 'react-bootstrap';

import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utilities';

function StoreItem({ id, name, price, image }) {
  const { increaseItem } = useCart();

  function addToCartHandler() {
    increaseItem({ id, name, price, image });
  }

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 fs-2 text-muted">
            {formatCurrency(price, 'USD')}
          </span>
        </Card.Title>
        <div className="mt-auto">
          <Button onClick={addToCartHandler} className="w-100">
            + Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
