// src/Context/CartContext.js
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducers/CartReducer";
import toast from "react-hot-toast";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: 0,
  total_amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCartProduct = (id, price, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, price, quantity, product },
    });
    toast.success('Item Added to Cart !')
  };

  const removeFromCartProduct = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  const updateCartQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: { id, quantity },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCartProduct, removeFromCartProduct, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
