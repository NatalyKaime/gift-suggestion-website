import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ExternalLink {
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const ExternalLinks = () => {
  const links: ExternalLink[] = [
    {
      title: "Telegram канал",
      description:
        "по вопросам рекламы своих товаров на наших площадках обращайтесь к администратору",
      url: "https://t.me/interesnble",
      icon: "MessageCircle",
      color: "bg-blue-500",
    },
    {
      title: "Поддержка",
      description: "Свяжитесь с нами для получения помощи",
      url: "https://t.me/support_channel",
      icon: "HelpCircle",
      color: "bg-green-500",
    },
    {
      title: "Новости проекта",
      description: "Следите за последними обновлениями",
      url: "https://t.me/project_news",
      icon: "Bell",
      color: "bg-purple-500",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {links.map((link, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
          >
            <CardHeader className="text-center">
              <div
                className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={link.icon} size={24} className="text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">
                {link.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {link.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={() => handleLinkClick(link.url)}
                className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300"
              >
                Открыть
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExternalLinks;
