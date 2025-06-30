import Icon from "@/components/ui/icon";

const HandmadeDishware = () => {
  return (
    <article className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-[480px] flex flex-col">
        <div className="relative flex-shrink-0">
          <img
            src="https://cdn.poehali.dev/files/5b1d15de-6695-4cd9-b6eb-44b0c6cd7c64.jpg"
            alt="Уникальная керамическая кружка ручной работы в виде золотой рыбки - эксклюзивный подарок"
            className="w-full h-48 object-cover"
            loading="lazy"
            width="400"
            height="192"
          />
          <div className="absolute top-3 left-3 bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
            Ручная работа
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <header className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon name="Coffee" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Посуда ручной работы
              </h2>
              <p className="text-sm text-gray-600">Уникальные изделия</p>
            </div>
          </header>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Эксклюзивная керамическая посуда, созданная мастерами. Каждое
            изделие неповторимо и станет особенным подарком для близких.
          </p>

          <a
            href="https://www.livemaster.ru/item/54687150"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:scale-105 font-medium"
            aria-label="Посмотреть коллекцию посуды ручной работы на LiveMaster"
          >
            Посмотреть коллекцию
            <Icon name="ExternalLink" size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default HandmadeDishware;
