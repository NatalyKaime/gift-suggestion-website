import Icon from "@/components/ui/icon";

const PaintingCollection = () => {
  return (
    <div className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/files/04e9fdca-a737-4553-ad1d-1e05afe8270d.jpg"
            alt="Картина Панельные окошки с силуэтами людей"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
            дорогие подарки
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
              <Icon name="Palette" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Коллекция картин "Панельные окошки"
              </h3>
            </div>
          </div>

          <a
            href="https://artist-au.tb.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 hover:scale-105 font-medium"
          >
            Посмотреть коллекцию
            <Icon name="ExternalLink" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaintingCollection;
