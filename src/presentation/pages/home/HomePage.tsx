import { Link } from "react-router-dom";
import { MOCK_GAMES } from "../../../data/games";

export const HomePage = () => {
  const juegosDisponibles = MOCK_GAMES.length;
  const ofertasActivas = MOCK_GAMES.filter((g) => g.price < 60).length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a GameStore</h1>
      <h2 className="text-2xl font-bold mb-8"> La Tienda de Juegos del CUROC</h2>
      <h2 className="text-2xl font-bold mb-8"> Puros Juegos de Calidad $$$</h2>

      <div className="flex gap-4 mb-8">
        <div className="bg-white border p-6 rounded-md shadow-sm w-64 text-center hover:shadow-md transition-shadow">
          <p className="text-gray-500">Juegos disponibles</p>
          <p className="text-3xl font-bold">{juegosDisponibles}</p>
        </div>

        <div className="bg-white border p-6 rounded-md shadow-sm w-64 text-center hover:shadow-md transition-shadow">
          <p className="text-gray-500">Ofertas activas</p>
          <p className="text-3xl font-bold">{ofertasActivas}</p>
        </div>
      </div>

      <Link
        to="/catalog"
        className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-md font-bold"
      >
        Ir al catalogo
      </Link>
    </div>
  );
};
