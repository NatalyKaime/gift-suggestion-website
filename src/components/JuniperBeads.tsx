import { ExternalLink } from "lucide-react";

const JuniperBeads = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src="https://cdn.poehali.dev/files/3d3f5031-e3ce-4381-bede-6afdcd70f7ae.jpg"
          alt="Можжевеловые бусы ручной работы с деревянными и вязаными элементами"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <span
          className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
          aria-label="Товар ручной работы"
        >
          ручная работа
        </span>
      </div>

      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            можжевеловые бусы
          </h2>
        </header>

        <footer className="flex justify-between items-center">
          <a
            href="https://ozon.ru/t/978dzW2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-describedby="juniper-beads-external-link"
          >
            <ExternalLink size={18} aria-hidden="true" />
            Посмотреть на Ozon
          </a>
          <span id="juniper-beads-external-link" className="sr-only">
            Ссылка откроется в новой вкладке
          </span>
        </footer>
      </div>
    </article>
  );
};

export default JuniperBeads;
