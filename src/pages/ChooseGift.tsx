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

        <Tabs defaultValue="gender" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="gender">По полу</TabsTrigger>
            <TabsTrigger value="age">По возрасту</TabsTrigger>
            <TabsTrigger value="interests">По интересам</TabsTrigger>
          </TabsList>

          <TabsContent value="gender">
            <div className="grid md:grid-cols-2 gap-6">
              {giftCategories.gender.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="text-center">
                    <Icon
                      name={category.icon as any}
                      size={48}
                      className="mx-auto mb-4 text-purple-600"
                    />
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>Популярные подарки</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {category.gifts.map((gift, index) => (
                        <div
                          key={index}
                          className="bg-purple-100 rounded-lg p-3 text-center text-sm"
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
