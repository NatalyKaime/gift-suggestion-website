import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PhotoPrinter = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="destructive"
              className="bg-orange-500 hover:bg-orange-600"
            >
              Лучшее на озон
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Портативный фотопринтер
          </h3>
          <a
            href="https://ozon.ru/t/8UNBsRQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2">
              <Icon name="ExternalLink" size={18} />
              Смотреть на Озон
            </Button>
          </a>
        </div>

        <div className="flex-1 max-w-md">
          <img
            src="https://cdn.poehali.dev/files/cef45a80-b4d4-4a5c-934e-c04159e39e74.jpg"
            alt="Портативный фотопринтер"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoPrinter;
