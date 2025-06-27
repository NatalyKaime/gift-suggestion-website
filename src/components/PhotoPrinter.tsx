import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PhotoPrinter = () => {
  return (
    <div className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/cef45a80-b4d4-4a5c-934e-c04159e39e74.jpg"
            alt="Портативный фотопринтер"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3 bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
            Лучшее на озон
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Портативный фотопринтер
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Компактный принтер для печати фотографий прямо с телефона.
            Создавайте физические воспоминания в любом месте и в любое время.
          </p>

          <a
            href="https://ozon.ru/t/8UNBsRQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:scale-105 font-medium"
          >
            Смотреть на Озон
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoPrinter;
