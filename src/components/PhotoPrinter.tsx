import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PhotoPrinter = () => {
  return (
    <article className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-96 flex flex-col">
        <div className="relative flex-shrink-0">
          <img
            src="https://cdn.poehali.dev/files/cef45a80-b4d4-4a5c-934e-c04159e39e74.jpg"
            alt="Портативный фотопринтер - компактное устройство для печати фотографий с телефона"
            className="w-full h-48 object-cover"
            loading="lazy"
            width="400"
            height="192"
          />
          <div className="absolute top-3 left-3 bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
            Лучшее на озон
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <header className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Портативный фотопринтер
            </h2>
            <p className="text-sm text-gray-600">Печать фото с телефона</p>
          </header>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Компактный принтер для печати фотографий прямо с телефона.
            Создавайте физические воспоминания в любом месте и в любое время.
          </p>

          <a
            href="https://ozon.ru/t/8UNBsRQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 hover:scale-105 font-medium"
            aria-label="Купить портативный фотопринтер на Озон"
          >
            Смотреть на Озон
            <Icon name="ExternalLink" size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default PhotoPrinter;
