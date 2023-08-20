import { useNavigate } from "react-router-dom";
import "./Item.css";
import { useCart } from "../../context/cartContext";

export const Item = ({ image, category, title, id, price }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <article className="item">
      <div onClick={() => navigate(`/product/${id}`)}>
        <div className="item__img">
          <img src={image} />
        </div>
        <div className="item__content">
          <div className="item__content-info">
            {/* <span className="item__content-category">{category}</span> */}
            <span className="item__content-title">{title}</span>
          </div>
          <span className="item__content-price">${price}</span>
        </div>
      </div>
      <div>
        <button onClick={() => addToCart({ image, category, title, id, price })}>
          add to cart
        </button>
      </div>
    </article>
  );
};

export default Item;
