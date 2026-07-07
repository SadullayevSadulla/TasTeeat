import newsData from "./newsData";

const MainNews = () => {
    return (
        <section>
            <div className="news container">
                <div className="news_to mt-[100px]">
                    <div className="news_img" className="flex items-center justify-center">
                        <img src="/Frame (16).png" alt="" />
                    </div>
                    <div className="top_text flex flex-col items-center text-center">
                        <h1 className="text-[40px] font-[400] font-['Cormorant_Infant'] mb-[20px]">Be First Who Read News</h1>
                        <p className="text-[20px] font-[400] font-['Josefin_Sans'] max-w-[465px] text-[#555555]">
                            Explore the latest stories about our dishes, offers, events and future plans here.
                        </p>
                    </div>
                </div>
                <div className="news_cards mt-[60px] flex justify-between gap-[30px]">
                    {newsData.map((item) => (
                        <div key={item.id} className="w-[600px] border border-[#DCDCDC] bg-white overflow-hidden">
                            <div className="relative">
                                <img src={item.image} alt={item.title} className="w-full h-[380px] object-cover brightness-50" />
                                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E1B168] px-[45px] py-[18px] text-[22px] font-['Josefin_Sans'] cursor-pointer hover:bg-[#c89b52] duration-300">
                                    View Morex
                                </button>
                            </div>
                            <div className="p-[35px]">
                                <div className="flex gap-[20px] mb-[25px]">
                                    <span className="uppercase border-b border-[#E1B168] pb-[6px] tracking-[3px] text-[14px] font-['Josefin_Sans']"> {item.category} </span>
                                    <span className="uppercase border-b border-[#E1B168] pb-[6px] tracking-[3px] text-[14px] font-['Josefin_Sans']"> {item.date} </span>
                                </div>
                                <h2 className="text-[30px] font-[400] leading-[50px] font-['Cormorant_Infant'] mb-[20px]">{item.title} </h2>
                                <p className="text-[#555] text-[20px] leading-[34px] font-['Josefin_Sans']">{item.description} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainNews;