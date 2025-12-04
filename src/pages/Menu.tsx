import { Link } from "react-router-dom";
import { categories } from "@/data/menu";
import { CarouselPlugin } from "@/components/carouselPlugin";
import { MenuCard } from "@/components/menuCard";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menuItems";

export const Menu = () => {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-8 text-center text-red-600">
        Menu
      </h1>

      <div className="mb-12">
        <CarouselPlugin />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <Link key={cat.id} to={`/menu/${cat.id}`}>
            <Button className="rounded-full px-4 py-3 sm:py-4 sm:px-6 hover:bg-red-600 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              {cat.name}
            </Button>
          </Link>
        ))}
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        Mais pedidos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
