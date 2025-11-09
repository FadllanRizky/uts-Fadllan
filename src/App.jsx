import { useState } from "react";
import Headers from "./components/Headers";
import MainContent from "./components/MainContent";
import Footers from "./components/Footers";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Headers cartCount={cartCount} />
      <main className="flex-grow">
        <MainContent onAddToCart={handleAddToCart} />
      </main>
      <Footers />
    </div>
  );
}

export default App;
