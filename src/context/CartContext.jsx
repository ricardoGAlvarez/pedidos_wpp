"use client"

import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reduces/cart'

export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const updateQuantity = (productId, newQuantity) =>
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: productId,
        newQuantity,
      },
    });

  return { state, addToCart, removeFromCart, clearCart, updateQuantity };
}

// ...

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, updateQuantity } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}