import Icon from "@/components/ui/icon";

const WashingVacuum = () => {
  return (
    <article className="max-w-lg mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <div className="w-full h-64 bg-gray-100">
            <iframe
              src="https://www.tiktok.com/embed/v2/7446948436513672480"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              className="rounded-t-xl"
              title="Моющий пылесос - демонстрация работы"
            />
          </div>
          <div className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
            Видео обзор
          </div>
        </div>

        <div className="p-6">
          <header className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon
                name="Vacuum"
                fallback="Zap"
                size={24}
                className="text-white"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Моющий пылесос
              </h2>
              <p className="text-sm text-gray-600">Для идеальной чистоты</p>
            </div>
          </header>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Современный моющий пылесос для эффективной уборки любых
            поверхностей. Отличный подарок для тех, кто ценит чистоту и комфорт
            в доме.
          </p>

          <a
            href="https://vm.tiktok.com/ZNHbJtveDBAbb-Ccbhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 hover:scale-105 font-medium"
            aria-label="Посмотреть видео моющего пылесоса в TikTok"
          >
            Смотреть видео
            <Icon name="ExternalLink" size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default WashingVacuum;
