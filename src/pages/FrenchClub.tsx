import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FrenchClub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            🌟 Французский клуб с Маленьким принцем
          </h1>
          <Link to="/choose-gift">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="ArrowLeft" size={16} />
              Назад к подаркам
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <Icon name="Star" size={64} className="mx-auto mb-4 text-white" />
            <CardTitle className="text-3xl font-bold mb-4">
              Добро пожаловать в наш французский клуб!
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-white/95 leading-relaxed">
            <p className="text-xl mb-6">
              Откройте для себя магию французского языка через удивительную
              историю Маленького принца Антуана де Сент-Экзюпери.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                В нашем клубе вы погрузитесь в поэтический мир французской
                литературы, изучая язык через одно из самых любимых произведений
                мировой классики.
              </p>

              <p>
                Каждое занятие — это путешествие по планетам вместе с Маленьким
                принцем, где вы будете изучать новые слова, грамматику и
                французскую культуру естественным и увлекательным способом.
              </p>

              <p>
                Присоединяйтесь к нашему сообществу любителей французского языка
                и литературы. Вместе мы откроем тайны прекрасного французского
                языка!
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-8 py-3"
                asChild
              >
                <a
                  href="https://t.me/french_little_prince_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Присоединиться в Telegram
                  <Icon name="ExternalLink" size={20} />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FrenchClub;
