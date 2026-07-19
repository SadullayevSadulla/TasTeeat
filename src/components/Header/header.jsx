import { FaVk, FaYoutube } from "react-icons/fa";
import { FiPlay, FiExternalLink } from "react-icons/fi";

export const services = [
    { label: "Услуги", title: "Аренда корта" },
    { label: "Услуги", title: "Детский теннис" },
    { label: "Услуги", title: "Сборы команд" },
    { label: "Турниры", title: "Расписание" },
];

const Header = () => {
    return (
        <div className="bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
            <header className="border-b border-white/20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-5">
                        <div>
                            <img src="/Logo.png" alt="Logo" />
                        </div>
                        <nav className="hidden lg:flex items-center gap-8 text-white text-sm">
                            <a href="#">Главная</a>
                            <a href="#">О клубе</a>
                            <a href="#">Турниры</a>
                            <a href="#">Услуги</a>
                            <a href="#">Детский теннис</a>
                            <a href="#">Галерея</a>
                            <a href="#">Цены</a>
                            <a href="#">Контакты</a>
                        </nav>
                        <div className="flex items-center gap-4 text-white text-xl">
                            <a href="#">
                                <FaYoutube />
                            </a>
                            <a href="#">
                                <FaVk />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header_hero container">
                <div className="mx-auto pt-32 pb-40 mt-25">
                    <h1 className="text-white text-5xl font-bold leading-tight max-w-[600px]">
                        Петербургский теннисный клуб <br />
                        имени М.А. Пасечникова
                    </h1>

                    <div className="flex items-center gap-4 mt-16">
                        <button className="w-20 h-20 rounded-full border border-white/60 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-[#8D86C9] flex items-center justify-center">
                                <FiPlay className="text-white text-2xl ml-1 fill-current" />
                            </div>
                        </button>

                        <p className="text-white font-[600] text-[18px] leading-6">
                            Посмотрите видео <br /> о нашем клубе
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto relative">
                <div className="grid gap-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/20 translate-y-1/2">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href="#"
                            className="bg-[#8D86C9] hover:bg-[#7A73BB] transition px-6 py-6 flex flex-col gap-4"
                        >
                            <span className="text-white/70 text-sm">{service.label}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-white font-semibold">{service.title}</span>
                                <FiExternalLink className="text-white" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;