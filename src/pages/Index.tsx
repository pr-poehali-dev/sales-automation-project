import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.poehali.dev/projects/cbdc51a8-f1bc-4d38-ac5d-8cb7e5459c0a/files/9652dee6-d781-4c8e-a417-a11e1d384e63.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 sm:py-24 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-scale-in">
              <Icon name="TrendingUp" size={20} />
              <span className="text-sm font-medium">Автоматизация Продаж</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Увеличьте прибыль минимум в{" "}
              <span className="text-yellow-300">2 раза</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Без дополнительных вложений в рекламу. Настройка за несколько дней. 
              Работает автоматически без вашего участия.
            </p>
            
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold shadow-2xl animate-slide-up"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Смотреть видео
            </Button>
            
            <p className="text-sm text-white/70 pt-2">
              👇 Подробная инструкция в видео ниже
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-16 animate-fade-in">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Icon name="PlayCircle" size={80} className="mx-auto mb-4 text-purple-500" />
                <p className="text-lg">Видео-презентация</p>
                <p className="text-sm mt-2">Здесь будет ваше видео</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Почему это работает?
            </h2>
            <p className="text-lg text-gray-600">
              Включите несколько инструментов и наблюдайте рост прибыли
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg animate-slide-up">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="Zap" size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Быстрая настройка</h3>
              <p className="text-gray-600">
                Запуск системы автоматизации занимает всего несколько дней
              </p>
            </Card>

            <Card className="p-6 border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="DollarSign" size={28} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Без вложений</h3>
              <p className="text-gray-600">
                Никаких дополнительных расходов на рекламу или продвижение
              </p>
            </Card>

            <Card className="p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="Target" size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Автоматизация</h3>
              <p className="text-gray-600">
                Система работает 24/7 без вашего постоянного участия
              </p>
            </Card>

            <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Рост прибыли x2</h3>
              <p className="text-gray-600">
                Гарантированное увеличение продаж минимум в 2 раза
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl animate-scale-in">
            <Icon name="Rocket" size={60} className="mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Готовы увеличить прибыль?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Посмотрите видео выше и узнайте, как запустить автоматизацию продаж уже сегодня
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              <Icon name="CheckCircle" className="mr-2" size={24} />
              Начать сейчас
            </Button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Автоматизация Продаж. Увеличьте свою прибыль уже сегодня.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
