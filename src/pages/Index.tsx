import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExternalLinks from "@/components/ExternalLinks";

import HandmadeDishware from "@/components/HandmadeDishware";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 whitespace-nowrap">
            Что подарить?
          </h1>
          <p className="text-lg text-gray-500 mb-8 font-medium">
            агрегатор идей для подарков со ссылками на товары
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link to="/choose-gift">
              <Button className="flex items-center gap-2 text-lg px-6 py-3">
                <Icon name="Gift" size={20} />
                Выбрать подарок
              </Button>
            </Link>
          </div>
        </div>

        <HandmadeDishware />

        <ExternalLinks />
      </div>
    </div>
  );
};

export default Index;
