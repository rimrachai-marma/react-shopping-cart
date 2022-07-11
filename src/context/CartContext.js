import { createContext, useContext } from 'react';

const CartContext = createContext({
  cartItems: [],
  cartQuantity: 0,
  increaseItem: (items, quantity) => {},
  decreaseItem: (id) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  isOpen: false,
  openCart: () => {},
  closeCart: () => {}
});

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
