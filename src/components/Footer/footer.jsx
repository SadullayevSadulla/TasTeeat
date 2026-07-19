import { FaVk, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f4ede0] border-t border-slate-200 mt-[100px] py-[38px]">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                <p className="text-center md:text-left">2022 © Все права защищены</p>

                <nav className="flex flex-wrap items-center justify-center gap-4 text-slate-600">
                    {[ "Главная", "О клубе", "Турниры", "Услуги", "Детский теннис", "Галерея", "Цены", "Контакты",
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="transition-colors hover:text-slate-900"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center justify-center gap-4">
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-900">
                        <FaYoutube size={18} />
                    </a>
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-900">
                        <FaVk size={18} />
                    </a>
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-900">
                        <FaTelegramPlane size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;