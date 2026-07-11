import newsData from "./newsData";

const MainNews = () => {
    return (
        <section>
            <div className="news container">
                <div className="news_to mt-[60px] lg:mt-[100px] px-4">
                    <div className="news_img flex items-center justify-center">
                        <img src="/Frame (16).png" alt="" className="w-[36px] lg:w-auto" />
                    </div>
                    <div className="top_text flex flex-col items-center text-center">
                        <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-[400] font-['Cormorant_Infant'] mb-[15px] lg:mb-[20px]">
                            Be First Who Read News
                        </h1>
                        <p className="text-[16px] lg:text-[20px] font-[400] font-['Josefin_Sans'] max-w-[465px] text-[#555555]">
                            Explore the latest stories about our dishes, offers, events and future plans here.
                        </p>
                    </div>
                </div>

                <div className="news_cards mt-[40px] lg:mt-[60px] flex flex-col lg:flex-row justify-between gap-[30px]">
                    {newsData.map((item) => (
                        <div key={item.id} className="w-full lg:w-1/2 border border-[#DCDCDC] bg-white overflow-hidden">
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[380px] object-cover brightness-50"
                                />
                                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E1B168] px-[25px] sm:px-[35px] lg:px-[45px] py-[10px] sm:py-[14px] lg:py-[18px] text-[15px] sm:text-[18px] lg:text-[22px] font-['Josefin_Sans'] cursor-pointer hover:bg-[#c89b52] duration-300 whitespace-nowrap">
                                    View Morex
                                </button>
                            </div>
                            <div className="p-[20px] sm:p-[28px] lg:p-[35px]">
                                <div className="flex flex-wrap gap-[15px] lg:gap-[20px] mb-[15px] lg:mb-[25px]">
                                    <span className="uppercase border-b border-[#E1B168] pb-[6px] tracking-[2px] lg:tracking-[3px] text-[12px] lg:text-[14px] font-['Josefin_Sans']">
                                        {item.category}
                                    </span>
                                    <span className="uppercase border-b border-[#E1B168] pb-[6px] tracking-[2px] lg:tracking-[3px] text-[12px] lg:text-[14px] font-['Josefin_Sans']">
                                        {item.date}
                                    </span>
                                </div>
                                <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[400] leading-[32px] sm:leading-[40px] lg:leading-[50px] font-['Cormorant_Infant'] mb-[12px] lg:mb-[20px]">
                                    {item.title}
                                </h2>
                                <p className="text-[#555] text-[15px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[34px] font-['Josefin_Sans']">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainNews;