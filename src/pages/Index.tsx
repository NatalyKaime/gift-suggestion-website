import ExternalLinks from "@/components/ExternalLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Добро пожаловать!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Здесь вы найдете полезные ссылки на наши ресурсы и каналы связи
          </p>
        </div>

        <ExternalLinks />
      </div>
    </div>
  );
};

export default Index;
