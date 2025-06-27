import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExternalLinks from "@/components/ExternalLinks";

import HandmadeDishware from "@/components/HandmadeDishware";
import PaintingCollection from "@/components/PaintingCollection";
import OzonBest from "@/components/OzonBest";
import PhotoPrinter from "@/components/PhotoPrinter";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 whitespace-nowrap">
            Что подарить?
          </h1>
          <p className="text-gray-500 mb-5 font-medium whitespace-nowrap text-xs">
            агрегатор идей для подарков со ссылками на товары
          </p>

          <nav
            className="flex justify-center gap-4"
            role="navigation"
            aria-label="Основная навигация"
          >
            <Link to="/choose-gift" aria-describedby="choose-gift-description">
              <Button className="flex items-center gap-2 text-lg px-6 py-3">
                <Icon name="Gift" size={20} aria-hidden="true" />
                Выбрать подарок
              </Button>
            </Link>
            <span id="choose-gift-description" className="sr-only">
              Перейти к выбору подарка по категориям
            </span>
          </nav>
        </header>

        <section aria-label="Категории подарков" className="space-y-8">
          <HandmadeDishware />
          <PaintingCollection />
          <PhotoPrinter />
          <OzonBest />
        </section>

        <footer className="mt-12">
          <ExternalLinks />
        </footer>
      </div>
    </main>
  );
};

export default Index;
