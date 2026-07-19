const Main = () => {
    return (
        <main id="about">
            <div className="main container">
                <div className="main_img flex mt-[150px] justify-between gap-6">
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/qwertttty.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <p className="absolute bottom-6 left-0 right-0 text-center text-white font-semibold text-lg leading-snug whitespace-pre-line px-4">
                            5 летних{"\n"}грунтовых кортов
                        </p>
                    </div>

                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/asdfghjkl.png" 
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <p className="absolute bottom-6 left-0 right-0 text-center text-white font-semibold text-lg leading-snug whitespace-pre-line px-4">
                            Зал с покрытием{"\n"}"Искусственная трава"
                        </p>
                    </div>

                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/zxcvbnm.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <p className="absolute bottom-6 left-0 right-0 text-center text-white font-semibold text-lg leading-snug whitespace-pre-line px-4">
                            Зал с покрытием{"\n"}"Хард"
                        </p>
                    </div>
                </div>
            </div>

            <div className="main_b container mx-auto px-6">
                <div className="mt-[120px] max-w-[1100px] mx-auto flex items-stretch">
                    <div className="relative z-10 w-[340px] shrink-0 -mr-20">
                        <div className="relative z-10 w-[526px] shrink-0">
                            <img
                                src="/dfghj.png"
                                alt=""
                                className="absolute top-[80px] left-[50px] w-[450px] h-[430px]"
                            />
                        </div>
                    </div>

                    <div className=" bg-[#f4ece1] pl-35 pr-18 py-12 flex flex-col justify-center ml-[150px]">
                        <h2 className="text-[28px] leading-tight font-semibold text-[#1c1c1c] mb-5">
                            Спортивный клуб
                        </h2>

                        <p className="text-[14px] text-[#8b8b8b] mb-4 max-w-[430px]">
                            Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit
                            turpis. Ultricies erat pretium risus quam tincidunt non viverra
                            porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit
                            mauris vitae amet aliquet ultricies mauris pellentesque. Non
                            ipsum commodo, sit mi sit natus aenean nisl. Donec sit
                            pellentesque enim, vestibulum.
                        </p>

                        <p className="text-[14px] text-[#8b8b8b] leading-relaxed mb-6">
                            Condimentum hac adipiscing purus in augue nisi. Convallis ut
                            nisi.
                        </p>

                        <h3 className="text-[16px] font-semibold text-[#1c1c1c] mb-4">
                            Ornare orci ut dictum nulla fames.
                        </h3>

                        <ul className="space-y-3 max-w-[400px]">
                            {[
                                "Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.",
                                "Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor vitae in.",
                                "Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis.",
                                "Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.",
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="w-[7px] h-[7px] mt-[6px] bg-[#8b8bd8] shrink-0" />
                                    <p className="text-[14px] text-[#8b8b8b] leading-relaxed">
                                        {text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;