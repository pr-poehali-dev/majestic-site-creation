import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [donateLogin, setDonateLogin] = useState("");
  const [donateAmount, setDonateAmount] = useState("");
  
  const handleDonate = () => {
    if (!donateLogin || !donateAmount) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    window.open(`https://anypay.io/?login=${donateLogin}&amount=${donateAmount}`, '_blank');
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Miami GTA 5 Background - Full Site */}
      <div 
        className="fixed inset-0 bg-cover bg-top bg-no-repeat w-full h-full" 
        style={{ 
          backgroundImage: 'url("/img/682d4d87-cf5b-46d3-a3bc-ccc97ebddfb6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      ></div>
      
      {/* Falling Stars Effect */}
      <div className="falling-stars">
        <div className="star1"></div>
        <div className="star2"></div>
        <div className="star3"></div>
        <div className="star4"></div>
        <div className="star5"></div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      <div className="relative z-20">
      {/* Miami Particles Effect */}
      <div className="miami-particles"></div>
      
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-orange-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg glow-orange">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h1 className="text-white font-bold text-xl">MIAMI</h1>
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
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 border-none">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать RageMP
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 miami-waves"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500/20 text-orange-200 border-orange-500/30">
              🏖️ Лучший RolePlay сервер
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent miami-neon">
              MIAMI ROLEPLAY
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Добро пожаловать в солнечный Майами! Создайте свою историю в городе мечты.
              Реалистичная ролевая игра, дружелюбное сообщество и безграничные возможности.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500/50 text-orange-200 hover:bg-orange-500/10">
                <Icon name="Users" size={20} className="mr-2" />
                Сообщество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-orange-900/50 to-slate-900/50 border-orange-500/30">
              <CardHeader>
                <Icon name="Palmtree" size={32} className="text-orange-400 mb-4" fallback="MapPin" />
                <CardTitle className="text-white">Реалистичный Майами</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Детализированная карта города с пляжами, районами и локациями
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-900/50 to-slate-900/50 border-orange-500/30">
              <CardHeader>
                <Icon name="Users" size={32} className="text-orange-400 mb-4" />
                <CardTitle className="text-white">RolePlay сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Качественная ролевая игра с опытными игроками и администрацией
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-900/50 to-slate-900/50 border-orange-500/30">
              <CardHeader>
                <Icon name="Car" size={32} className="text-orange-400 mb-4" />
                <CardTitle className="text-white">Множество профессий</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  От полицейского до бизнесмена - выбирайте свой путь в городе
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
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Перейти на форум
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Пополнить баланс</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Пополните баланс своего аккаунта и получайте привилегии в игре
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-orange-900/50 to-slate-900/50 border-orange-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl flex items-center justify-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-orange-400" />
                  Пополнение баланса
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Введите ваш игровой логин и сумму пополнения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login" className="text-white font-medium">Игровой логин</Label>
                  <Input
                    id="login"
                    type="text"
                    placeholder="Введите ваш ник в игре"
                    value={donateLogin}
                    onChange={(e) => setDonateLogin(e.target.value)}
                    className="bg-black/30 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white font-medium">Сумма (руб.)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="100"
                    min="1"
                    value={donateAmount}
                    onChange={(e) => setDonateAmount(e.target.value)}
                    className="bg-black/30 border-orange-500/50 text-white placeholder:text-gray-400 focus:border-orange-400"
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDonateAmount('100')}
                    className="border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  >
                    100₽
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDonateAmount('250')}
                    className="border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  >
                    250₽
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDonateAmount('500')}
                    className="border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  >
                    500₽
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setDonateAmount('1000')}
                    className="border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  >
                    1000₽
                  </Button>
                </div>
                
                <Button 
                  size="lg" 
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 text-lg glow-orange"
                >
                  <Icon name="Wallet" size={20} className="mr-2" />
                  Пополнить через AnyPay
                </Button>
                
                <div className="text-center text-sm text-gray-400">
                  🔒 Безопасная оплата через AnyPay
                </div>
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
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Скачайте RageMP</h4>
              <p className="text-gray-400 text-sm">Установите клиент для подключения к серверу</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Создайте персонажа</h4>
              <p className="text-gray-400 text-sm">Придумайте имя и историю вашего героя</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Изучите правила</h4>
              <p className="text-gray-400 text-sm">Ознакомьтесь с правилами RolePlay</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Начните жизнь!</h4>
              <p className="text-gray-400 text-sm">Стройте карьеру в солнечном Майами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
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
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">discord.gg/miamiRP</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Telegram</h4>
              <p className="text-gray-400">Оперативная поддержка</p>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">@miamirp_support</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-gray-400">Для деловых вопросов</p>
              <a href="mailto:admin@miamirp.com" className="text-orange-400 hover:text-orange-300 transition-colors">admin@miamirp.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-8 border-t border-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-semibold">MIAMI ROLEPLAY SERVER</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Miami RolePlay Server. Все права защищены.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;