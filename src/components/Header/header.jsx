import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/languageSwitcher";

const Header = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const navLinks = [
        { label: t("nav.home"), href: "home" },
        { label: t("nav.about"), href: "about" },
        { label: t("nav.menu"), href: "menu" },
        { label: t("nav.pages"), href: "pages" },
        { label: t("nav.blog"), href: "blog" },
        { label: t("nav.contact"), href: "contact" },
    ];

    return (
        <div className="wrap" id="home">
            <header className="bg-[#292E36]">
                <div className="lg:hidden">
                    <div className="border-b border-white flex flex-col items-center gap-6 py-8 px-5">
                        <button className="border border-[#E1B168] px-8 py-3 text-white text-[14px] font-['Josefin_Sans']">
                            {t("header.call")}
                        </button>
                        <img src="/IMAGE.png" alt="Logo" className="h-[110px] w-auto" />
                        <button className="bg-[#E1B168] px-10 py-3 text-[#292E36] font-semibold font-['Josefin_Sans']">
                            {t("header.reservation")}
                        </button>
                    </div>

                    <div ref={menuRef} className="relative">
                        <div className="flex items-center justify-between bg-[#292E36] border-t border-white/10 px-5 py-3">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                className="bg-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer flex-shrink-0"
                            >
                                <svg
                                    width="18"
                                    height="13"
                                    viewBox="0 0 18 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="18" height="2" fill="#292E36" />
                                    <rect y="5.5" width="18" height="2" fill="#292E36" />
                                    <rect y="11" width="18" height="2" fill="#292E36" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.instagram.com/sadullayev.0627/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[32px] h-[32px] flex items-center justify-center"
                                >
                                    <img src="/IMAGE (1).png" alt="Instagram" className="w-[14px] h-[14px]" />
                                </a>

                                <a href="#" className="w-[32px] h-[32px] flex items-center justify-center">
                                    <img src="/Vector.png" alt="Facebook" className="w-[14px] h-[14px]" />
                                </a>

                                <a href="#" className="w-[32px] h-[32px] flex items-center justify-center">
                                    <img src="/IMAGE (2).png" alt="Twitter" className="w-[14px] h-[14px]" />
                                </a>

                                <a href="#" className="w-[32px] h-[32px] flex items-center justify-center">
                                    <img src="/Vector (1).png" alt="LinkedIn" className="w-[14px] h-[14px]" />
                                </a>
                                <LanguageSwitcher />
                            </div>
                        </div>
                        <div className={`absolute top-[100%] left-0 w-full bg-[#5B5B5B] z-50 overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <nav className="flex flex-col font-['Josefin_Sans']">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={`#${link.href}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-5 py-4 border-b border-white/10 text-white hover:text-[#E1B168] transition duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="text-center px-5 pt-[50px] pb-[10px]">
                        <h1 className="font-['Josefin_Sans'] text-[34px] sm:text-[42px] font-[400] text-white leading-[1.2]">
                            {t("header.welcomeTo")}<br />{t("header.restaurant")}
                        </h1>
                        <p className="text-white text-[13px] my-[20px] max-w-[380px] mx-auto font-['Josefin_Sans']">
                            {t("header.heroSubtitle")}
                        </p>
                        <button className="border border-[#E1B168] px-8 py-3 text-white font-semibold hover:bg-[#E1B168] hover:text-[#292E36] transition duration-300 cursor-pointer font-['Josefin_Sans']">
                            {t("header.viewMenu")}
                        </button>
                    </div>

                    <div className="relative w-full flex justify-center items-center py-[40px]">
                        <div className="relative inline-block">
                            <img
                                src="/qw12qw.png"
                                alt="Hero Image"
                                className="w-full max-w-[520px] relative z-10"
                            />

                            <img
                                src="/IMAGE (30).png"
                                alt=""
                                className="absolute top-[-40px] right-[40px] w-[200px] md:w-[220px] lg:w-[250px] animate-spin-slow z-20"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="border-b border-white">
                        <div className="container">
                            <div className="header_top flex items-center justify-between py-8">
                                <div className="header_left_button">
                                    <button className="border border-[#E1B168] px-8 py-3 text-white">
                                        {t("header.call")}
                                    </button>
                                </div>
                                <div className="header_logo">
                                    <img src="/IMAGE.png" alt="Logo" id="br" />
                                </div>
                                <div className="header_button_right">
                                    <button className="bg-[#E1B168] px-8 py-3 text-[#292E36] font-semibold">
                                        {t("header.reservation")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mt-[20px] flex items-center justify-between">
                            <div className="header_nav">
                                <nav className="flex items-center gap-8 text-white font-['Josefin_Sans']">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={`#${link.href}`}
                                            className="hover:text-[#E1B168] transition duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="header_icon flex items-center gap-4">
                                <a href="https://www.instagram.com/sadullayev.0627/" target="_blank" rel="noopener noreferrer">
                                    <img src="/IMAGE (1).png" alt="Instagram" className="cursor-pointer" />
                                </a>
                                <img src="/Vector.png" alt="Facebook" />
                                <img src="/IMAGE (2).png" alt="Twitter" />
                                <img src="/Vector (1).png" alt="LinkedIn" />
                                <LanguageSwitcher />
                            </div>
                        </div>
                        <div className="hero_secton flex items-center justify-between mt-[100px]">
                            <div className="hero_br">
                                <h1 className="font-['Josefin_Sans'] text-[90px] font-[400] text-white">{t("header.welcomeTo")} {t("header.restaurant")}</h1>
                                <p className="text-white my-[26px] max-w-[616px]">{t("header.heroSubtitle")}</p>
                                <button className="border border-[#E1B168] px-8 py-3 text-[#292E36] font-semibold text-white hover:bg-[#E1B168] hover:text-[#292E36] transition duration-300 cursor-pointer">{t("header.viewMenu")}</button>
                            </div>
                            <div className="hero_ik relative">
                                <img src="/qw12qw.png" alt="Hero Image" className="relative z-10" />

                                <img
                                    src="/IMAGE (30).png"
                                    alt=""
                                    className="absolute top-[-40px] right-[1px] w-[240px] h-[240px] animate-spin-slow z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
