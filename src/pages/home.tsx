import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="relative flex flex-col text-center text-white">
      {/* Imagem de fundo */}
      <div
        className="absolute top-0 left-0 w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/fundoHome.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black/60 rounded-2xl"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-red-600 drop-shadow-lg">
          Bem-vindo
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 drop-shadow-md">
          O melhor restaurante de Luanda! Descubra nosso cardápio e sabores incríveis.
        </p>
        <Link to="/menu">
          <Button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105">
            Ver Menu
          </Button>
        </Link>

        {/* Cards */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl px-4 sm:px-6">
          {[
            { title: "Entradas", desc: "Deliciosas entradas para começar sua refeição." },
            { title: "Pratos Principais", desc: "Pratos irresistíveis preparados com carinho." },
            { title: "Bebidas & Cocktails", desc: "Refrescos, vinhos e cocktails para todos os gostos." },
          ].map((card, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 rounded-2xl shadow-2xl bg-linear-to-br from-black/40 to-black/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-sm sm:text-base text-gray-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
