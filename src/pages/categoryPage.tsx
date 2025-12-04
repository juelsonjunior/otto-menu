import { useState } from "react";
import { useParams } from "react-router-dom";
import { menuItems } from "@/data/menuItems";
import { MenuCard } from "@/components/menuCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/menu";

export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((cat) => cat.id === categoryId);

  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // estado para pesquisa

  if (!category) {
    return <p className="text-center mt-12">Categoria não encontrada.</p>;
  }

  const currentSub =
    category.subcategories.find((sub) => sub.id === selectedSubId) ||
    category.subcategories[0];

  const itemsInSub = menuItems
    .filter((item) => item.subCategoryId === currentSub.id)
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); // filtra pelo searchTerm

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">{category.name}</h1>
      {/* Input de pesquisa */}
      <div className="flex justify-center mb-8">
        <Input
          type="text"
          placeholder="Pesquisar pelo nome do produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md w-full rounded-full py-4"
        />
      </div>

      {/* Lista de subcategorias como botões */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {category.subcategories.map((sub) => (
          <Button
            key={sub.id}
            onClick={() => {setSelectedSubId(sub.id); setSearchTerm("");}}
            className={`px-4 py-2 rounded-2xl transition-colors duration-300 ${
              sub.id === currentSub.id
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white"
            }`}
          >
            {sub.name}
          </Button>
        ))}
      </div>

      

      {/* Lista de itens filtrados */}
      {itemsInSub.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsInSub.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          Nenhum item encontrado para sua pesquisa.
        </p>
      )}
    </div>
  );
};
