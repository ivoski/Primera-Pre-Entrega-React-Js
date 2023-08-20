import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    return console.error(
      "El componente tiene que estar envuelto en el context provider."
    );
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const foundProductIndex = cart.findIndex((el) => el.id === product.id);

    if (foundProductIndex === -1) {
      setCart([...cart, { ...product, count: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[foundProductIndex].count++;
      setCart(updatedCart);
    }
  };

  const removeToCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const quitOneProduct = (product) => {
    const foundProductIndex = cart.findIndex((el) => el.id === product.id);

    if (foundProductIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[foundProductIndex].count === 1) {
        removeToCart(product.id);
      } else {
        updatedCart[foundProductIndex].count--;
        setCart(updatedCart);
      }
    }
  };

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, quitOneProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
