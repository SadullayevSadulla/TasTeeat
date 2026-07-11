import menuData from "./menuData";

const MainMenu = () => {
    return (
        <section id="menu" className="container">
            <div className="section mt-[60px] lg:mt-[100px] flex flex-col xl:flex-row gap-[40px] xl:gap-[55px] mb-[60px] lg:mb-[100px]">
                <div className="section_left xl:sticky xl:top-[40px] h-fit w-full xl:w-auto xl:max-w-[400px]">
                    <div className="section_logo flex justify-center xl:justify-start">
                        <img src="/Frame (5).png" alt="Logo" className="w-[40px] xl:w-auto" />
                    </div>
                    <div className="section_hat text-center xl:text-left">
                        <h1 className="font-[400] text-[28px] sm:text-[34px] xl:text-[40px] font-['Cormorant_Infant']">
                            Try Our Special dishes
                        </h1>
                        <p className="font-[300] text-[15px] xl:text-[16px] text-[#666666] font-['Josefin_Sans'] max-w-[450px] mx-auto xl:mx-0 my-[16px] xl:my-[20px]">
                            Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.
                        </p>
                    </div>
                    <div className="section_img">
                        <img src="/IMAGE (4).png" alt="" className="w-full h-auto object-cover rounded-[8px] xl:rounded-none" />
                    </div>
                    <div className="section_button flex justify-center xl:justify-start">
                        <button className="w-full sm:w-auto border border-[#E1B168] px-8 py-3 font-semibold mt-[30px] xl:mt-[60px] text-[#E1B168] hover:bg-[#E1B168] hover:text-white duration-300 cursor-pointer">
                            See all dishes
                        </button>
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    {menuData.map((section) => (
                        <div key={section.id} className={section.id !== 1 ? "mt-[60px] lg:mt-[100px]" : ""}>
                            <h1 className="font-[400] text-[20px] lg:text-[24px] font-['Cormorant_Infant'] mb-[20px] lg:mb-[30px]">
                                {section.title}
                            </h1>
                            {section.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-[30px] lg:mb-[40px] gap-[15px] sm:gap-[20px]"
                                >
                                    <div className="flex items-center gap-[15px] lg:gap-[20px]">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-[64px] h-[64px] lg:w-[84px] lg:h-[84px] rounded-full object-cover flex-shrink-0"
                                        />
                                        <div>
                                            <h2 className="text-[22px] lg:text-[30px] font-['Cormorant_Infant']">
                                                {item.name}
                                            </h2>
                                            <p className="text-[15px] lg:text-[20px] font-['Josefin_Sans'] text-[#555]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full sm:w-[200px] lg:w-[280px] gap-[10px] lg:gap-[15px]">
                                        <div className="w-full h-[1px] bg-[#AAAAAA] sm:mt-[50px]"></div>
                                        <span className="sm:mt-[40px] whitespace-nowrap font-['Josefin_Sans']">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainMenu;