import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExternalLinks from "@/components/ExternalLinks";
import NativeAd from "@/components/NativeAd";
import HandmadeDishware from "@/components/HandmadeDishware";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Что подарить?
          </h1>
          <p className="text-lg text-gray-500 mb-8 font-medium">
            агрегатор идей для подарков со ссылками на товары
          </p>
          <div className="text-xl text-gray-600 max-w-2xl mx-auto">
            <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] text-black">
              Подарки для души и тела
            </div>
            <div className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] text-black">
              Общение с единомышленниками
            </div>
            <div className="animate-fade-in opacity-0 [animation-delay:1.0s] [animation-fill-mode:forwards] text-black">
              Саморазвитие и образование
            </div>
            <div className="animate-fade-in opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards] text-black">
              Уход за здоровьем
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link to="/choose-gift">
              <Button className="flex items-center gap-2 text-lg px-6 py-3">
                <Icon name="Gift" size={20} />
                Выбрать подарок
              </Button>
            </Link>
          </div>
        </div>

        <NativeAd />

        <HandmadeDishware />

        <ExternalLinks />
      </div>
    </div>
  );
};

export default Index;
