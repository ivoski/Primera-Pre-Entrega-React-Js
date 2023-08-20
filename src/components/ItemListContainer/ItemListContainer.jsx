import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";
import s from "./ItemListContainer.module.css";

export const ItemListContainer = ({ products }) => {
  const { categoryName } = useParams();

  return (
    <div className={s.itemList}>
      {!categoryName
        ? products?.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))
        : products
            ?.filter((el) => el.category === categoryName)
            .map((product) => (
              <Item
                key={product.id}
                id={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            ))}
    </div>
  );
};
export default ItemListContainer;
