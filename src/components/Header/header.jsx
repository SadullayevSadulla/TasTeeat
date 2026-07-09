const Header = () => {
    return (
        <div className="wrap">
            <header className="bg-[#292E36]">
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
                    </div>
                    <div className="sm:flex-wrap flex items-center">
                        <div className="header_icon flex items-center gap-4">
                            <a href="https://www.instagram.com/sadullayev.0627/" target="_blank" rel="noopener noreferrer">
                                <img src="/IMAGE (1).png" alt="Instagram" className="cursor-pointer" />
                            </a>
                            <img src="/Vector.png" alt="Facebook" />
                            <img src="/IMAGE (2).png" alt="Twitter" />
                            <img src="/Vector (1).png" alt="LinkedIn" />
                        </div>
                        <div className="hero_secton flex items-center justify-between mt-[100px]">
                            <div className="hero_br">
                                <h1 className="font-['Josefin_Sans'] text-[90px] font-[400] text-white">Welcome to Restaurant</h1>
                                <p className="text-white my-[26px] ax-w-[616px]">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
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