import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const ChooseGift = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showLanguageClubs, setShowLanguageClubs] = useState<boolean>(false);

  const languageClubs = [
    {
      id: "harry-potter",
      title: "Английский клуб с Гарри Поттером",
      icon: "BookOpen",
      description: "Изучай английский через магический мир Хогвартса",
      link: "https://t.me/english_harry_potter_club",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "little-prince",
      title: "Французский клуб с Маленьким принцем",
      icon: "Star",
      description: "Открой красоту французского языка с любимой сказкой",
      link: "/french-club",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const giftCategories = [
    {
      id: "home",
      title: "🏠 Для дома",
      icon: "Home",
      description: "Подарки, которые сделают дом уютнее и комфортнее",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "books",
      title: "📚 Книги",
      icon: "BookOpen",
      description: "Увлекательное чтение для любого возраста и интереса",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: "clothing",
      title: "👕 Одежда и аксессуары",
      icon: "Shirt",
      description: "Стильные вещи и аксессуары на любой вкус",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "tech",
      title: "💻 Техника",
      icon: "Laptop",
      description: "Современные гаджеты и технологии",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">🎁 Выбор подарка</h1>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="ArrowLeft" size={16} />
              На главную
            </Button>
          </Link>
        </div>

        <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              📚 Подписка на языковые клубы
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Изучайте языки через любимые книги и сказки
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showLanguageClubs ? (
              <div className="text-center">
                <Button
                  onClick={() => setShowLanguageClubs(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg"
                  size="lg"
                >
                  Посмотреть языковые клубы
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Button
                    onClick={() => setShowLanguageClubs(false)}
                    variant="outline"
                    size="sm"
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Назад
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {languageClubs.map((club) => (
                    <Card
                      key={club.id}
                      className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r ${club.gradient} text-white border-0 h-full`}
                    >
                      <CardHeader className="text-center pb-4">
                        <Icon
                          name={club.icon as any}
                          size={40}
                          className="mx-auto mb-3 text-white"
                        />
                        <CardTitle className="text-lg font-bold">
                          {club.title}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-sm">
                          {club.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        {club.id === "little-prince" ? (
                          <Link to={club.link}>
                            <Button
                              variant="secondary"
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                              size="sm"
                            >
                              Присоединиться
                              <Icon
                                name="ArrowRight"
                                size={14}
                                className="ml-2"
                              />
                            </Button>
                          </Link>
                        ) : (
                          <a
                            href={club.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="secondary"
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                              size="sm"
                            >
                              Присоединиться
                              <Icon
                                name="ExternalLink"
                                size={14}
                                className="ml-2"
                              />
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {giftCategories.map((category) => (
            <Card
              key={category.id}
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r ${category.gradient} text-white border-0 h-full`}
            >
              <CardHeader className="text-center pb-4">
                <Icon
                  name={category.icon as any}
                  size={40}
                  className="mx-auto mb-3 text-white"
                />
                <CardTitle className="text-lg font-bold">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-white/90 text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  Выбрать
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Отличный выбор! Ищите подарки в выбранной категории.
            </p>
            <Button onClick={() => setSelectedCategory("")} variant="outline">
              Выбрать другую категорию
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseGift;
