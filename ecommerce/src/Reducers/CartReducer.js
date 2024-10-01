// src/Reducers/CartReducer.js
const CartReducer = (state, action) => {
  let cartProduct = null; // Initialize cartProduct

  switch (action.type) {
    case "ADD_TO_CART":
      const { id, price, quantity, product } = action.payload;
      cartProduct = {
        id: id,
        name: product.name,
        price: price,
        quantity: quantity,
        image: product.img,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
