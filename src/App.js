import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {

  const [isCartShown, setIsCartShown] = useState(false)

  const openCart = () => {
    setIsCartShown(true);

  }
  const closeCart = () => {
    setIsCartShown(false);
  }

  return (
    <CartProvider>
      <Header onOpen={openCart} />
      <main>
        <Meals />
      </main>
      {isCartShown && <Cart onClose={closeCart} />}
    </CartProvider>
  );
}

export default App;
