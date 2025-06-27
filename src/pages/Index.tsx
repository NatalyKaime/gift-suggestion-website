import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExternalLinks from "@/components/ExternalLinks";

import HandmadeDishware from "@/components/HandmadeDishware";
import PaintingCollection from "@/components/PaintingCollection";
import OzonBest from "@/components/OzonBest";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 whitespace-nowrap">
            Что подарить?
          </h1>
          <p className="text-gray-500 mb-5 font-medium whitespace-nowrap text-xs">
            агрегатор идей для подарков со ссылками на товары
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/choose-gift">
              <Button className="flex items-center gap-2 text-lg px-6 py-3">
                <Icon name="Gift" size={20} />
                Выбрать подарок
              </Button>
            </Link>
          </div>
        </div>

        <HandmadeDishware />

        <PaintingCollection />

        <OzonBest />

        <ExternalLinks />
      </div>
    </div>
  );
};

export default Index;
