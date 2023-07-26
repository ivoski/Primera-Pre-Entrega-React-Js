import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";
import s from "./ItemListContainer.module.css";
import { useEffect } from "react";
const data = [
  {
    id: 1,
    title: "Producto 1",
    price: 19.99,
    description: "Descripción del producto 1",
    category: "Accion",
    img: "ruta_de_la_imagen_1.jpg",
  },
  {
    id: 2,
    title: "Producto 2",
    price: 9.99,
    description: "Descripción del producto 2",
    category: "Deportes",
    img: "ruta_de_la_imagen_2.jpg",
  },
  {
    id: 3,
    title: "Producto 3",
    price: 49.99,
    description: "Descripción del producto 3",
    category: "Accion",
    img: "ruta_de_la_imagen_3.jpg",
  },
  {
    id: 4,
    title: "Producto 4",
    price: 29.99,
    description: "Descripción del producto 4",
    category: "Aventura",
    img: "ruta_de_la_imagen_4.jpg",
  },
  {
    id: 5,
    title: "Producto 5",
    price: 14.99,
    description: "Descripción del producto 5",
    category: "Deportes",
    img: "ruta_de_la_imagen_5.jpg",
  },
  {
    id: 6,
    title: "Producto 6",
    price: 39.99,
    description: "Descripción del producto 6",
    category: "Accion",
    img: "ruta_de_la_imagen_6.jpg",
  },
  {
    id: 7,
    title: "Producto 7",
    price: 24.99,
    description: "Descripción del producto 7",
    category: "Aventura",
    img: "ruta_de_la_imagen_7.jpg",
  },
  {
    id: 8,
    title: "Producto 8",
    price: 12.99,
    description: "Descripción del producto 8",
    category: "Deportes",
    img: "ruta_de_la_imagen_8.jpg",
  },
  {
    id: 9,
    title: "Producto 9",
    price: 7.99,
    description: "Descripción del producto 9",
    category: "Accion",
    img: "ruta_de_la_imagen_9.jpg",
  },
  {
    id: 10,
    title: "Producto 10",
    price: 59.99,
    description: "Descripción del producto 10",
    category: "Aventura",
    img: "ruta_de_la_imagen_10.jpg",
  },
];

export const ItemListContainer = ({ products, setProducts }) => {
  const { categoryName } = useParams();
  // useEffect(() => {
  //   if (!categoryName) {
  //     setProducts(data);
  //   } else {
  //     setProducts(products.filter((el) => el.category === categoryName));
  //   }
  // }, [categoryName]);

  return (
    <div className={s.itemList}>
      {!categoryName
        ? products?.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              img={product.img}
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
                img={product.img}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            ))}
    </div>
  );
};
export default ItemListContainer;
