const Footer = () => {
    return (
        <footer className="bg-[#292E36] text-white pt-[60px] lg:pt-[120px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 mb-[40px] lg:mb-[70px] text-center lg:text-left">
                    <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-['Cormorant_Infant'] order-2 lg:order-1">
                        #TheTastEat
                    </h2>
                    <img src="/IMAGE.png" alt="Logo" className="order-1 lg:order-2 h-[50px] lg:h-auto" />
                    <div className="footer_icon flex gap-[14px] lg:gap-[10px] order-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="22px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="22px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="22px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="22px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-20 items-center lg:items-center pb-[50px] lg:pb-[80px] text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <img src="/Frame (15).png" alt="" className="mb-6 lg:mb-8 w-[36px] lg:w-auto" />
                        <p className="text-[17px] sm:text-[19px] lg:text-[22px] font-['Josefin_Sans'] leading-[30px] lg:leading-10">
                            5 Rue Dalou, 75015 Paris
                        </p>
                        <p className="text-[#E1B168] text-[17px] sm:text-[19px] lg:text-[22px] font-['Josefin_Sans'] mt-2">
                            +123 456 789
                        </p>
                        <p className="text-[#E1B168] text-[17px] sm:text-[19px] lg:text-[22px] font-['Josefin_Sans'] mt-2">
                            josefin@mail.com
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-center text-[17px] sm:text-[19px] lg:text-[22px] leading-[28px] lg:leading-[40px] font-['Josefin_Sans'] max-w-[500px]">
                            Join our mailing list for updates,
                            <br />
                            Get news & offers events.
                        </p>
                        <div className="flex flex-col sm:flex-row mt-8 lg:mt-10 gap-3 sm:gap-0">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 h-[56px] lg:h-[68px] bg-transparent border border-[#575B62] px-6 text-[16px] lg:text-[20px] outline-none placeholder:text-[#FFFFFF]"
                            />
                            <button className="w-full sm:h-[56px] lg:h-[68px] bg-white text-[#292E36] text-[17px] lg:text-[22px] hover:bg-[#E1B168] hover:text-white duration-300 cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-end">
                        <img
                            src="/Frame (18).png"
                            alt=""
                            className="mb-6 lg:mb-8 w-[36px] lg:w-auto"
                        />
                        <div className="space-y-3 lg:space-y-4 text-[17px] sm:text-[19px] lg:text-[22px] font-['Josefin_Sans']">
                            <p>
                                <span className="text-[#E1B168]">Mon - Fri:</span>{" "}
                                7.00am - 6.00pm
                            </p>
                            <p>
                                <span className="text-[#E1B168]">Sat:</span>{" "}
                                7.00am - 6.00pm
                            </p>
                            <p>
                                <span className="text-[#E1B168]">Sun:</span>{" "}
                                8.00am - 6.00pm
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#3F434B] py-6 lg:py-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 text-center lg:text-left">
                    <p className="text-[14px] sm:text-[17px] lg:text-[20px] font-['Josefin_Sans']">
                        © Copyright - TastEat | Designed by{" "}
                        <span className="text-[#E1B168]">VictorFlow</span> - Powered by{" "}
                        <span className="text-[#E1B168]">Webflow</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-[14px] sm:text-[17px] lg:text-[20px] font-['Josefin_Sans']">
                        <a href="#" className="hover:text-[#E1B168]">
                            Styleguide
                        </a>
                        <a href="#" className="hover:text-[#E1B168]">
                            Licenses
                        </a>
                        <a href="#" className="hover:text-[#E1B168]">
                            Protected
                        </a>
                        <a href="#" className="hover:text-[#E1B168]">
                            Not Found
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;