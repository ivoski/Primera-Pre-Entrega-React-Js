import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ products }) => {
  const [product, setProduct] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    setProduct(products.find(el => el.id == id))
  }, [id])

  return (
    <>
      {product ? (
        <div>
          <div>
            <img src={`/${product.img}`} alt={product.title} />
          </div>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ) : (
        <p>no hay nada aqui</p>
      )}
    </>
  );
};

export default ItemDetail;
