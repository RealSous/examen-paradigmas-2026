import { useState } from "react";
import { GameCard } from "../../components/games/GameCard";
import { MOCK_GAMES } from "../../../data/games";

export const CatalogPage = () => {
  // estado independiente con usestate
  const [cartCount, setCartCount] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);

  // funciones manejadoras de eventos
  const handleAddToCart = (price: number) => {
    setCartCount((prev) => prev + 1);
    setTotalSpent((prev) => prev + price);
    setShowCart(true); // Mostramos el carrito automáticamente al agregar algo
  };

  const handleEmptyCart = () => {
    setCartCount(0);
    setTotalSpent(0);
  };

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="bg-gray-50 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Catalogo de Juegos</h2>
        <p className="text-gray-600">Descubre tu proximo vicio</p>
      </div>

      {/* seccion 1 - lista de juegos */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {MOCK_GAMES.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
            icon={game.icon}
            onAddToCart={() => handleAddToCart(game.price)}
          />
        ))}
      </div>

      {/* seccion 2 - controles del carrito */}
      <div className="bg-white p-4 rounded-md border mb-6 flex gap-4">
        <button
          onClick={handleEmptyCart}
          disabled={cartCount === 0}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Vaciar carrito
        </button>

        <button
          onClick={handleToggleCart}
          disabled={cartCount === 0}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-bold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Ver resumen
        </button>
      </div>

      {/* seccion 3 - resumen del carrito (renderizado condicional) */}
      {showCart && (
        <div className="bg-gray-800 text-white p-4 rounded-md mb-8 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Resumen de tu compra</h3>
            <p>Juegos en carrito: {cartCount}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Total a pagar:</p>
            <p className="text-2xl font-bold text-green-400">
              ${totalSpent.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
