import { useState } from 'react';

import Cart from '../components/cart/Cart';
import { useLocalStorage } from '../components/hook/useStorage';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('_shopping_cart_', []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const increaseItem = ({ id, name, price, image }, quantity = 1) => {
    setCartItems((_items) => {
      if (!_items.find((_item) => _item.id === id)) {
        return [..._items, { id, name, price, image, quantity }];
      } else {
        return _items.map((_item) => {
          if (_item.id === id) {
            return { ..._item, quantity: _item.quantity + quantity };
          } else {
            return _item;
          }
        });
      }
    });
  };

  const decreaseItem = (id) => {
    setCartItems((_items) => {
      if (_items.find((_item) => _item.id === id)?.quantity === 1) {
        return _items.filter((_item) => _item.id !== id);
      } else {
        return _items.map((_item) => {
          if (_item.id === id) {
            return { ..._item, quantity: _item.quantity + -1 };
          } else {
            return _item;
          }
        });
      }
    });
  };
  const removeItem = (id) => {
    setCartItems((_items) => {
      return _items.filter((_item) => _item.id !== id);
    });
  };
  const clearCart = (id) => {
    setCartItems([]);
  };

  const cartContext = {
    cartItems,
    cartQuantity,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    isOpen,
    openCart,
    closeCart
  };
  return (
    <CartContext.Provider value={cartContext}>
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
};

export default CartProvider;
