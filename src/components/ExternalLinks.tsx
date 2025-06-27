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
    <section
      className="container mx-auto px-4 py-8"
      aria-labelledby="external-links-heading"
    >
      <h2 id="external-links-heading" className="sr-only">
        Полезные ссылки и контакты
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {links.map((link, index) => (
          <article
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
          >
            <div className="bg-white rounded-lg p-6 h-full flex flex-col">
              <header className="text-center mb-4">
                <div
                  className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon name={link.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">{link.title}</h3>
              </header>
              <p className="text-gray-600 mb-6 flex-grow">{link.description}</p>
              <footer className="text-center mt-auto">
                <Button
                  onClick={() => handleLinkClick(link.url)}
                  className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300"
                  aria-label={`Открыть ${link.title}`}
                >
                  Открыть
                  <Icon
                    name="ExternalLink"
                    size={16}
                    className="ml-2"
                    aria-hidden="true"
                  />
                </Button>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExternalLinks;
