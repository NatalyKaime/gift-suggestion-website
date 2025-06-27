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

  const giftCategories = {
    gender: [
      {
        id: "for-him",
        title: "Для него",
        icon: "User",
        gifts: ["Часы", "Гаджеты", "Книги", "Спорттовары"],
      },
      {
        id: "for-her",
        title: "Для неё",
        icon: "Heart",
        gifts: ["Украшения", "Косметика", "Цветы", "Аксессуары"],
      },
    ],
    age: [
      {
        id: "kids",
        title: "Детям",
        icon: "Baby",
        gifts: ["Игрушки", "Конструкторы", "Книги", "Творчество"],
      },
      {
        id: "teens",
        title: "Подросткам",
        icon: "Gamepad2",
        gifts: ["Гаджеты", "Игры", "Одежда", "Музыка"],
      },
      {
        id: "adults",
        title: "Взрослым",
        icon: "Users",
        gifts: ["Техника", "Путешествия", "Хобби", "Опыт"],
      },
    ],
    interests: [
      {
        id: "tech",
        title: "Технологии",
        icon: "Smartphone",
        gifts: ["Смартфоны", "Ноутбуки", "Гаджеты", "Аксессуары"],
      },
      {
        id: "sport",
        title: "Спорт",
        icon: "Dumbbell",
        gifts: ["Тренажёры", "Одежда", "Оборудование", "Питание"],
      },
      {
        id: "art",
        title: "Творчество",
        icon: "Palette",
        gifts: ["Материалы", "Инструменты", "Курсы", "Книги"],
      },
    ],
  };

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

        <Tabs defaultValue="age" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="age">По возрасту</TabsTrigger>
            <TabsTrigger value="interests">По интересам</TabsTrigger>
          </TabsList>

          <TabsContent value="age">
            <div className="grid md:grid-cols-3 gap-6">
              {giftCategories.age.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="text-center">
                    <Icon
                      name={category.icon as any}
                      size={48}
                      className="mx-auto mb-4 text-pink-600"
                    />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.gifts.map((gift, index) => (
                        <div
                          key={index}
                          className="bg-pink-100 rounded-lg p-2 text-center text-sm"
                        >
                          {gift}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interests">
            <div className="grid md:grid-cols-3 gap-6">
              {giftCategories.interests.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="text-center">
                    <Icon
                      name={category.icon as any}
                      size={48}
                      className="mx-auto mb-4 text-blue-600"
                    />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.gifts.map((gift, index) => (
                        <div
                          key={index}
                          className="bg-blue-100 rounded-lg p-2 text-center text-sm"
                        >
                          {gift}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

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
