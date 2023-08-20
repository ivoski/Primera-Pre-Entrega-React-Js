import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import "./CartPage.css";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart, removeToCart, addToCart, quitOneProduct, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
  });
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    const total = cart.reduce((acc, el) => acc + el.price * el.count, 0);
    setTotal(total.toFixed(2));
  }, [cart]);

  useEffect(() => {
    const isSameEmail = inputs.email === inputs.email2;
    const isInputsComplete = Object.values(inputs).every(
      (value) => value !== ""
    );

    setFormComplete(isSameEmail && isInputsComplete && cart.length > 0);
  }, [inputs, cart]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formComplete) {
      clearCart();
      setInputs({
        name: "",
        phone: "",
        email: "",
        email2: "",
      });
      alert(
        `Compra realizada exitosamente!. Id de la compra: ${cart.reduce(
          (tot, curr) => tot + `-${curr.id}`,
          ""
        )}`
      );
    }
  };

  return (
    <main className="cart-main">
      <section className="cart-section">
        {cart.map((el) => (
          <article key={el.name + el.id} className="cart-article">
            <div onClick={() => navigate(`/product/${el.id}`)}>
              <div className="cart-item__img">
                <img src={el.image} alt={el.title} />
              </div>
              <div className="cart-item__content">
                <div className="cart-item__content-info">
                  <span className="cart-item__content-title">{el.title}</span>
                </div>
                <span className="cart-item__content-price">${el.price}</span>
              </div>
            </div>
            <div className="cart-item__actions">
              <button onClick={() => quitOneProduct(el)}>-</button>
              <span>{el.count}</span>
              <button onClick={() => addToCart(el)}>+</button>
            </div>
            <div>
              <button
                className="cart-button"
                onClick={() => removeToCart(el.id)}
              >
                Remove from cart
              </button>
            </div>
          </article>
        ))}
      </section>
      <section className="cart-summary">
        <div className="cart-total">
          <p>
            Total: <strong>${total}</strong>
          </p>
        </div>
        <form className="cart-form" onSubmit={handleSubmit}>
          <div className="cart-form__input">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ingresa tu nombre..."
              onChange={handleChange}
              value={inputs.name}
            />
          </div>
          <div className="cart-form__input">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Ingresa tu teléfono..."
              onChange={handleChange}
              value={inputs.phone}
            />
          </div>
          <div className="cart-form__input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingresa tu email..."
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          <div className="cart-form__input">
            <label htmlFor="email2">Confirmar Email:</label>
            <input
              type="email"
              name="email2"
              id="email2"
              placeholder="Confirma tu email..."
              onChange={handleChange}
              value={inputs.email2}
            />
          </div>
          <button disabled={!formComplete}>Finalizar compra</button>
        </form>
      </section>
    </main>
  );
}
