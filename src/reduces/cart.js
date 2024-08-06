export const cartInitialState = typeof window !== 'undefined'
  ? (() => {
      try {
        return JSON.parse(window.localStorage.getItem('cart') || '[]');
      } catch (error) {
        console.error('Error parsing cart data:', error);
        return [];
      }
    })()
  : [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  UPDATE_PRICE: 'UPDATE_PRICE',

}

// update localStorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex(product => product.id === id);

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          cantidad: state[productInCartIndex].cantidad + 1,
        },
        ...state.slice(productInCartIndex + 1)
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        cantidad: 1,
      }
    ];

    updateLocalStorage(newState);
    return newState;

  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  },

  [CART_ACTION_TYPES.UPDATE_QUANTITY]: (state, action) => {
    const { id, newQuantity } = action.payload;
    const productIndex = state.findIndex(product => product.id === id);
  
    if (productIndex >= 0) {
      const updatedProduct = {
        ...state[productIndex],
        cantidad: newQuantity,
        // Actualizar el precio multiplicando el nuevo precio por la nueva cantidad
        price: state[productIndex].price * newQuantity,
      };
  
      const newState = [
        ...state.slice(0, productIndex),
        updatedProduct,
        ...state.slice(productIndex + 1),
      ];
  
      updateLocalStorage(newState);
      return newState;
    }
  
    // Si el producto no está en el carrito, no se hace nada
    return state;
  },


}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}