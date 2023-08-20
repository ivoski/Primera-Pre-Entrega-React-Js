import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { CartProvider } from "./context/cartContext";
import CartPage from "./components/CartPage/CartPage";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// const data = [
//   {
//     id: 1,
//     title: "Call of Duty MW2",
//     price: 19.99,
//     description: "Juego Belico",
//     category: "Accion",
//     img: "mw2.jpg",
//   },
//   {
//     id: 2,
//     title: "NFL24",
//     price: 9.99,
//     description: "Juego Futbol Americano",
//     category: "Deportes",
//     img: "nfl23.jpg",
//   },
//   {
//     id: 3,
//     title: "Call Of Duty WW2",
//     price: 49.99,
//     description: "Juego Belicon",
//     category: "Accion",
//     img: "ww2.jpg",
//   },
//   {
//     id: 4,
//     title: "Uncharted 4",
//     price: 29.99,
//     description: "Vato Belico",
//     category: "Aventura",
//     img: "uncharted.jpg",
//   },
//   {
//     id: 5,
//     title: "FIFA 23",
//     price: 14.99,
//     description: "Moreno Veloz",
//     category: "Deportes",
//     img: "fifa23.png",
//   },
//   {
//     id: 6,
//     title: "Call Of Duty Black Ops 4",
//     price: 39.99,
//     description: "Robots Belicos",
//     category: "Accion",
//     img: "bo4.jpg",
//   },
//   {
//     id: 7,
//     title: "The Last Of Us",
//     price: 24.99,
//     description: "Zombies Belicos",
//     category: "Aventura",
//     img: "tlou.jpg",
//   },
//   {
//     id: 8,
//     title: "NBA 2k24",
//     price: 12.99,
//     description: "Moreno Dunkero",
//     category: "Deportes",
//     img: "2k23.jpg",
//   },
//   {
//     id: 9,
//     title: "Ghost Of Tsushima",
//     price: 7.99,
//     description: "Chino Belico",
//     category: "Accion",
//     img: "ghost.jpg",
//   },
//   {
//     id: 10,
//     title: "The Last Of Us Parte II",
//     price: 59.99,
//     description: "Zombies Belicos la secuela",
//     category: "Aventura",
//     img: "tlou2.jpg",
//   },
// ];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const allProducts = collection(db, "productos");
    getDocs(allProducts).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  },[]);

  return (
    <CartProvider>
      <NavBar />
      <CartWidget />
      <Routes>
        <Route
          path="/product/:id"
          element={<ItemDetail products={products} />}
        />
        <Route
          path="/"
          element={
            <ItemListContainer products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/:categoryName"
          element={
            <ItemListContainer products={products} setProducts={setProducts} />
          }
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
