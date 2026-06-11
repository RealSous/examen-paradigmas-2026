import type { ReactNode } from "react";

interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: ReactNode;
  onAddToCart?: () => void;
}

export const GameCard = ({ title, genre, price, available, icon, onAddToCart }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>

      <p className="text-gray-500">{genre}</p>

      <p className="text-lg font-semibold">${price.toFixed(2)}</p>

      <div className="mt-2 flex justify-between items-center">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
            available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {available ? "Disponible" : "Agotado"}
        </span>

        {available && onAddToCart && (
          <button 
            onClick={onAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded transition-colors"
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};
