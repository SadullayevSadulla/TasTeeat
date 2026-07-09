import { useState } from "react";
import menuData from "./menuData";

const MainMenu = () => {
    return (
        <section className="container">
            <div className="section mt-[100px] flex gap-[55px] ">
                <div className="section_left ">
                    <div className="section_logo">
                        <img src="/Frame (5).png" alt="Logo" />
                    </div>
                    <div className="section_hat">
                        <h1 className="font-[400] text-[40px] font-['Cormorant_Infant']">Try Our Special dishes</h1>
                        <p className="font-[300] text-[16px] text-[#666666] font-['Josefin_Sans'] max-w-[450px] my-[20px]">Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
                    </div>
                    <div className="section_img">
                        <img src="/IMAGE (4).png" alt="" />
                    </div>
                    <div className="section_button">
                        <button className="border border-[#E1B168] px-8 py-3 text-[#292E36] font-semibold mt-[60px] text-[#E1B168] cursor-pointer">See all dishes</button>
                    </div>
                </div>
                <div>
                    {menuData.map((section) => (
                        <div key={section.id} className={section.id !== 1 ? "mt-[100px]" : ""}>
                            <h1 className="font-[400] text-[24px] font-['Cormorant_Infant'] mb-[30px]">
                                {section.title}
                            </h1>
                            {section.items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between mb-[40px] gap-[20px]">
                                    <div className="flex items-center gap-[20px]">
                                        <img src={item.image} alt="" className="w-[84px] h-[84px] rounded-full object-cover" />
                                        <div>
                                            <h2 className="text-[30px] font-['Cormorant_Infant']">{item.name}</h2>
                                            <p className="text-[20px] font-['Josefin_Sans'] text-[#555]">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-[280px] gap-[15px]">
                                        <div className="w-full h-[1px] bg-[#AAAAAA] mt-[50px]"></div>
                                        <span className="mt-[40px]">{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainMenu;