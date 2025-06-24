import Icon from "@/components/ui/icon";

const NativeAd = () => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <div className="absolute top-2 right-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
            Реклама
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Подарок особенный
                </h3>
                <p className="text-sm text-gray-600">Ручная работа</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Создайте незабываемый момент с уникальным подарком ручной работы.
              Каждая деталь продумана с любовью.
            </p>

            <a
              href="https://www.livemaster.ru/item/49945788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105"
            >
              Посмотреть на Livemaster
              <Icon name="ExternalLink" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeAd;
