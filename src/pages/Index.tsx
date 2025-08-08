import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const Index = () => {
  const portfolioApps = [
    {
      title: "Fitness Tracker",
      description: "Приложение для отслеживания тренировок",
      image: "/img/db1521f2-7e21-4764-9b30-0d331946cdd2.jpg",
      features: ["GPS трекинг", "Статистика", "Социальные функции"]
    },
    {
      title: "Food Delivery",
      description: "Сервис доставки еды с геолокацией",
      image: "/img/44b24098-2c41-46fe-aef4-e13ebe835a40.jpg", 
      features: ["Онлайн заказы", "Оплата картой", "Трекинг доставки"]
    },
    {
      title: "Banking App",
      description: "Безопасное мобильное банковское приложение",
      image: "/img/1cb725ea-cdfa-43a5-8fdd-a64abbf15cf6.jpg",
      features: ["Переводы", "Аналитика трат", "Биометрия"]
    }
  ];

  const carouselApps = [
    {
      title: "TaskManager Pro",
      description: "Корпоративный планировщик задач с синхронизацией",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "MedHelper",
      description: "Приложение для записи к врачам и контроля лекарств",
      image: "/placeholder.svg", 
      link: "#"
    },
    {
      title: "Smart Home",
      description: "Управление умным домом через мобильное приложение",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "EduPlatform",
      description: "Образовательная платформа с интерактивными курсами",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Создание мобильных приложений</h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Разрабатываем надежные и современные мобильные приложения для бизнеса. 
              Превращаем ваши идеи в успешные цифровые продукты.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioApps.map((app, index) => (
              <Card key={index} className="bg-white/5 border-gray-700 text-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Smartphone" size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="text-sm text-gray-400">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <Icon name="Check" size={16} className="mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
              Заказать разработку
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы обеспечиваем высокое качество разработки и полную прозрачность процесса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Практичность</h3>
              <p className="text-gray-600">Каждое приложение решает реальные задачи пользователей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Timer" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Скорость разработки</h3>
              <p className="text-gray-600">Быстрая разработка без потери качества</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Работа без ошибок</h3>
              <p className="text-gray-600">Тщательное тестирование на всех этапах</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Масштабируемость</h3>
              <p className="text-gray-600">Готовность к росту вашего бизнеса</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-black">Гарантии качества</h3>
              <p className="text-lg text-gray-700 mb-6">
                Мы гарантируем стабильную работу приложения, соответствие техническому заданию 
                и поддержку в течение первого года после запуска.
              </p>
              <p className="text-xl font-semibold text-black">
                Начните свой успешный проект уже сегодня!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Наше портфолио</h2>
            <p className="text-xl text-gray-600">Примеры успешно реализованных проектов</p>
          </div>

          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {carouselApps.map((app, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                          <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-black">{app.title}</h3>
                        <p className="text-gray-600 mb-4">{app.description}</p>
                        <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-black text-black hover:bg-black hover:text-white" />
              <CarouselNext className="border-black text-black hover:bg-black hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Purchase Offer */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Получите профессиональное мобильное приложение, которое выделит ваш бизнес 
                среди конкурентов и привлечет новых клиентов.
              </p>
              
              <div className="bg-white/5 p-6 rounded-lg mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">Комплексная разработка</h3>
                    <p className="text-gray-300">iOS + Android + Backend</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">от 800 000 ₽</div>
                    <div className="text-gray-400 line-through">1 200 000 ₽</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-4">
                Заказать сейчас
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 bg-white/10 rounded mb-6"></div>
                  
                  <div className="space-y-4">
                    <div className="h-12 bg-white/10 rounded"></div>
                    <div className="h-12 bg-white/10 rounded"></div>
                    <div className="h-12 bg-white/10 rounded"></div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts & Social */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Обсудим ваш проект и ответим на все вопросы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">VK Сообщество</h3>
                <p className="text-gray-600 mb-4">Следите за новостями и примерами работ</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Перейти в VK
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Telegram Канал</h3>
                <p className="text-gray-600 mb-4">Быстрая связь и консультации</p>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Написать в Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Email поддержка</h3>
                <p className="text-gray-600 mb-4">support@mobiledev.com</p>
                <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white">
                  Написать email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">MobileDev Studio</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Профессиональная разработка мобильных приложений для бизнеса. 
                Превращаем идеи в успешные цифровые продукты.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  support@mobiledev.com
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MobileDev Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;