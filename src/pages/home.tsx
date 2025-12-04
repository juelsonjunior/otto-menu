import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="relative flex flex-col text-center text-white">
      
      <div
        className="absolute top-0 left-0 w-full h-[70vh] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/fundoHome.png')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-[70vh] bg-black/60 rounded-2xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 h-[70vh]">
        <h1 className="text-5xl font-bold mb-6 text-red-600 drop-shadow-lg">
          Bem-vindo
        </h1>
        <p className="text-lg mb-8 drop-shadow-md">
          O melhor restaurante de Luanda! Descubra nosso cardápio e sabores incríveis.
        </p>
        <Link to="/menu">
          <Button className="px-8 py-4 text-lg bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105">
            Ver Menu
          </Button>
        </Link>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl px-6">
          <div className="p-6 rounded-2xl shadow-2xl bg-linear-to-br from-black/40 to-black/20 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-white">Entradas</h3>
            <p className="text-gray-200">Deliciosas entradas para começar sua refeição.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-2xl bg-linear-to-br from-black/40 to-black/20 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-white">Pratos Principais</h3>
            <p className="text-gray-200">Pratos irresistíveis preparados com carinho.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-2xl bg-linear-to-br from-black/40 to-black/20 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-white">Bebidas & Cocktails</h3>
            <p className="text-gray-200">Refrescos, vinhos e cocktails para todos os gostos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
