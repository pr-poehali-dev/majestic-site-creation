import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h1 className="text-white font-bold text-xl">MAJESTIC</h1>
            </div>
            
            {/* Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium">Главная</a>
              <a href="#forum" className="text-white hover:text-purple-400 transition-colors font-medium">Форум</a>
              <a href="#donate" className="text-white hover:text-purple-400 transition-colors font-medium">Донат</a>
              <a href="#guide" className="text-white hover:text-purple-400 transition-colors font-medium">Как начать играть</a>
            </div>
            
            {/* RageMP Download */}
            <a href="https://rage.mp/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-none">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать RageMP
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
              🎮 Лучший игровой сервер
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              MAJESTIC GAMING
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Погрузитесь в мир безграничных возможностей. Уникальные режимы игры,
              дружелюбное сообщество и незабываемые приключения ждут вас.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/10">
                <Icon name="Users" size={20} className="mr-2" />
                Сообщество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30">
              <CardHeader>
                <Icon name="Zap" size={32} className="text-purple-400 mb-4" />
                <CardTitle className="text-white">Быстрый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Простая регистрация и быстрое подключение к серверу
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30">
              <CardHeader>
                <Icon name="Shield" size={32} className="text-purple-400 mb-4" />
                <CardTitle className="text-white">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Надёжная защита от читеров и стабильная работа 24/7
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30">
              <CardHeader>
                <Icon name="Crown" size={32} className="text-purple-400 mb-4" />
                <CardTitle className="text-white">Уникальный контент</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Эксклюзивные режимы игры и постоянные обновления
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section id="forum" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Форум сообщества</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Общайтесь с другими игроками, делитесь опытом и получайте помощь от администрации
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Перейти на форум
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Поддержать проект</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ваша поддержка помогает развивать сервер и добавлять новые возможности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Стартовый</CardTitle>
                <div className="text-3xl font-bold text-purple-400">₽299</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Особый ник</li>
                  <li>• Приоритетное подключение</li>
                  <li>• Базовые привилегии</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700" onClick={() => window.open('https://anypay.io', '_blank')}>
                  Купить через AnyPay
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-400/50 transform scale-105">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-purple-500 text-white">Популярный</Badge>
                <CardTitle className="text-white text-xl">Премиум</CardTitle>
                <div className="text-3xl font-bold text-purple-400">₽599</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Всё из Стартового</li>
                  <li>• Эксклюзивные предметы</li>
                  <li>• Доступ к VIP зонам</li>
                  <li>• Специальные эффекты</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700" onClick={() => window.open('https://anypay.io', '_blank')}>
                  Купить через AnyPay
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Элитный</CardTitle>
                <div className="text-3xl font-bold text-purple-400">₽999</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Всё из Премиум</li>
                  <li>• Персональные настройки</li>
                  <li>• Приватные комнаты</li>
                  <li>• Прямая связь с админами</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700" onClick={() => window.open('https://anypay.io', '_blank')}>
                  Купить через AnyPay
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Как начать играть</h3>
            <p className="text-gray-300">Простые шаги для старта на нашем сервере</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Скачайте RageMP</h4>
              <p className="text-gray-400 text-sm">Установите клиент для подключения к серверу</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Регистрация</h4>
              <p className="text-gray-400 text-sm">Создайте аккаунт на нашем сервере</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Подключение</h4>
              <p className="text-gray-400 text-sm">Введите IP адрес сервера в клиенте</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Играйте!</h4>
              <p className="text-gray-400 text-sm">Наслаждайтесь игрой на нашем сервере</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Контакты</h3>
            <p className="text-gray-300">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Discord</h4>
              <p className="text-gray-400">Присоединяйтесь к нашему серверу</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">discord.gg/majestic</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Telegram</h4>
              <p className="text-gray-400">Оперативная поддержка</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">@majestic_support</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-gray-400">Для деловых вопросов</p>
              <a href="mailto:admin@majestic-server.com" className="text-purple-400 hover:text-purple-300 transition-colors">admin@majestic-server.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold">MAJESTIC GAMING SERVER</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Majestic Gaming Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;