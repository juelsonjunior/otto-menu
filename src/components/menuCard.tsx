import type { MenuItem } from "@/types/menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface Props {
  item: MenuItem;
}

export const MenuCard = ({ item }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex transform transition duration-300 cursor-pointer">
          <div className="w-1/3 h-48 overflow-hidden flex justify-center items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="w-2/3 p-6 text-left flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold mb-2 text-red-600">
                {item.name}
              </h4>
              <p className="text-gray-700 mb-1">
                {item.description.length > 20
                  ? item.description.slice(0, 20) + "..."
                  : item.description}
              </p>
            </div>
            <p className="text-lg font-bold mt-2">
              Preço: <span className="text-red-600">{item.price / 100} Kz</span>
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="text-3xl text-red-600">
            {item.name}
          </DialogTitle>
          <DialogDescription className="text-gray-700 mt-2">
            Detalhes
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col sm:flex-row gap-6">
          <div className="shrink-0 w-full sm:w-1/2 h-64 sm:h-80 overflow-hidden rounded-xl shadow">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-left">
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Ingredientes:</span>{" "}
              {item.description}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Modo de preparo:</span>{" "}
              {item.preparation}
            </p>
            <p className="text-lg font-bold mt-4">
              Preço: <span className="text-red-600">{item.price / 100} Kz</span>
            </p>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
