import Icon from "@/components/ui/icon";

const OzonBest = () => {
  return (
    <div className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/f843d21a-c3f9-4ccd-94da-d3a0e48629d9.jpg"
            alt="Кружка с ярким принтом - не стирается и не выгорает"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3 bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-medium">
            Лучшее на озоне
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <Icon name="Coffee" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Кружки с принтом
              </h3>
              <p className="text-sm text-gray-600">Качественная печать</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Стильные кружки с яркими принтами, которые не стираются и не
            выгорают. Высококачественная печать для тех, кто ценит качество и
            долговечность.
          </p>

          <a
            href="https://www.ozon.ru/category/kruzhki-10924/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 hover:scale-105 font-medium"
          >
            Смотреть на Ozon
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OzonBest;
