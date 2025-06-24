import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExternalLinks from "@/components/ExternalLinks";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Не знаешь , что подарить? Подари время*
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Здесь вы найдете полезные ссылки на наши ресурсы и каналы связи
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Link to="/choose-gift">
            <Button className="flex items-center gap-2 text-lg px-6 py-3">
              <Icon name="Gift" size={20} />
              Выбрать подарок
            </Button>
          </Link>
        </div>

        <ExternalLinks />
      </div>
    </div>
  );
};

export default Index;
