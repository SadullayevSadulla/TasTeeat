import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {
            label:"Home"
        },
        {
            label:"About Us"
        },
        {
            label:"Our Menu"
        },
        {
            label:"Pages", 
        },
        {
            label:"Blog"
        },
        {
            label:"Contact Us"
        },
    ];

    return (
        <div className="wrap">
            <header className="bg-[#292E36]">
                <div className="lg:hidden">
                    <div className="border-b border-white flex flex-col items-center gap-6 py-8 px-5">
                        <button className="border border-[#E1B168] px-8 py-3 text-white text-[14px] font-['Josefin_Sans']">
                            Call - 123 456 789
                        </button>
                        <img src="/IMAGE.png" alt="Logo" className="h-[110px] w-auto" />
                        <button className="bg-[#E1B168] px-10 py-3 text-[#292E36] font-semibold font-['Josefin_Sans']">
                            Reservation
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-[#292E36] border-t border-white/10 px-5 py-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="bg-white w-[40px] h-[40px] flex items-center justify-center cursor-pointer flex-shrink-0"
                        >
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="2" fill="#292E36" />
                                <rect y="5.5" width="18" height="2" fill="#292E36" />
                                <rect y="11" width="18" height="2" fill="#292E36" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/sadullayev.0627/" target="_blank" rel="noopener noreferrer" className="w-[32px] h-[32px] rounded-full  flex items-center justify-center">
                                <img src="/IMAGE (1).png" alt="Instagram" className="w-[14px] h-[14px]" />
                            </a>
                            <a href="#" className="w-[32px] h-[32px] rounded-full  flex items-center justify-center">
                                <img src="/Vector.png" alt="Facebook" className="w-[14px] h-[14px]" />
                            </a>
                            <a href="#" className="w-[32px] h-[32px] rounded-full  flex items-center justify-center">
                                <img src="/IMAGE (2).png" alt="Twitter" className="w-[14px] h-[14px]" />
                            </a>
                            <a href="#" className="w-[32px] h-[32px] rounded-full  flex items-center justify-center">
                                <img src="/Vector (1).png" alt="LinkedIn" className="w-[14px] h-[14px]" />
                            </a>
                        </div>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 bg-[#5B5B5B] ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <nav className="flex flex-col font-['Josefin_Sans']">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href="#"
                                    className={`flex items-center justify-between px-5 py-3 border-b border-white/10 ${link.active ? "text-[#E1B168]" : "text-white"
                                        } hover:text-[#E1B168] transition duration-300`}
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="text-center px-5 pt-[50px] pb-[10px]">
                        <h1 className="font-['Josefin_Sans'] text-[34px] sm:text-[42px] font-[400] text-white leading-[1.2]">
                            Welcome to<br />Restaurant
                        </h1>
                        <p className="text-white text-[13px] my-[20px] max-w-[380px] mx-auto font-['Josefin_Sans']">
                            The people, food and the prime locations make the perfect place good friends & family to come together and have great time.
                        </p>
                        <button className="border border-[#E1B168] px-8 py-3 text-white font-semibold hover:bg-[#E1B168] hover:text-[#292E36] transition duration-300 cursor-pointer font-['Josefin_Sans']">
                            View Menu
                        </button>
                    </div>

                    <div className="relative flex justify-center pt-[40px] overflow-hidden">
                        <div className="">
                            <img src="/Frame.png" alt="Hero" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="border-b border-white">
                        <div className="container">
                            <div className="header_top flex items-center justify-between py-8">
                                <div className="header_left_button">
                                    <button className="border border-[#E1B168] px-8 py-3 text-white">
                                        Call - 123 456 789
                                    </button>
                                </div>
                                <div className="header_logo">
                                    <img src="/IMAGE.png" alt="Logo" id="br" />
                                </div>
                                <div className="header_button_right">
                                    <button className="bg-[#E1B168] px-8 py-3 text-[#292E36] font-semibold">
                                        Reservation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mt-[20px] flex items-center justify-between">
                            <div className="header_nav">
                                <nav className="flex items-center gap-8 text-white font-['Josefin_Sans']">
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">Home</a>
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">About Us</a>
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">Our Menu</a>
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">Pages</a>
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">Blog</a>
                                    <a href="#" className="hover:text-[#E1B168] transition duration-300">Contact Us</a>
                                </nav>
                            </div>
                            <div className="header_icon flex items-center gap-4">
                                <a href="https://www.instagram.com/sadullayev.0627/" target="_blank" rel="noopener noreferrer">
                                    <img src="/IMAGE (1).png" alt="Instagram" className="cursor-pointer" />
                                </a>
                                <img src="/Vector.png" alt="Facebook" />
                                <img src="/IMAGE (2).png" alt="Twitter" />
                                <img src="/Vector (1).png" alt="LinkedIn" />
                            </div>
                        </div>
                        <div className="hero_secton flex items-center justify-between mt-[100px]">
                            <div className="hero_br">
                                <h1 className="font-['Josefin_Sans'] text-[90px] font-[400] text-white">Welcome to Restaurant</h1>
                                <p className="text-white my-[26px] max-w-[616px]">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
                                <button className="border border-[#E1B168] px-8 py-3 text-[#292E36] font-semibold text-white hover:bg-[#E1B168] hover:text-[#292E36] transition duration-300 cursor-pointer">View Menu</button>
                            </div>
                            <div className="hero_ik">
                                <img src="/Frame.png" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;