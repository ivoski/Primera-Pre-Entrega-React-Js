import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import "./cart.css";

const CartWidget = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart" onClick={() => navigate("/cart")}>
      <img src="/cart.svg" alt="Carrito de compras" />
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
