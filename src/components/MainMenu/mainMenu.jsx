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
               <div className="">
                 <div className="section_left">
                    <div className="section_bir">
                        <div className="section_bir_h1">
                            <h1 className="font-[400] text-[24px] font-['Cormorant_Infant'] mb-[30px]">Starters</h1>
                        </div>
                        <div className="section_cards flex items-center justify-between mb-[40px] gap-[20px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (5).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Raw Scallops from Erquy</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>

                            <div className="flex items-center w-[280px] gap-[15px]">
                                <div className="w-full h-[1px] bg-[#AAAAAA] mt-[50px]"></div>
                                <span className="mt-[40px]">$40</span>
                            </div>

                        </div>
                        <div className="section_cards flex items-center mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (6).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Spring Roll</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$40</span>
                            </div>
                        </div>
                        <div className="section_cards flex items-center mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (7).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">French Onion Soup</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400] ">Shuck the scallop to that used for oysters</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$30</span>
                            </div>
                        </div>
                        <div className="section_cards flex items-center justify-between mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img
                                        src="/IMAGE (8).png"
                                        alt="Dish"
                                        className="w-[84px] h-[84px] rounded-full object-cover"
                                    />
                                </div>

                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">
                                        Tomato Bruschetta
                                    </h1>

                                    <p className="text-[20px] font-[400] font-['Josefin_Sans']">
                                        Bread, olive oil, garlic, black pepper
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$30</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------- */}
                <div className="section_left mt-[100px]">
                    <div className="section_bir">
                        <div className="section_bir_h1">
                            <h1 className="font-[400] text-[24px] font-['Cormorant_Infant'] mb-[30px]">Main Dish</h1>
                        </div>
                        <div className="section_cards flex items-center justify-between mb-[40px] gap-[20px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (9).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Grilled Salmon with Dill Sauce</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>

                            <div className="flex items-center w-[280px] gap-[15px]">
                                <div className="w-full h-[1px] bg-[#AAAAAA] mt-[50px]"></div>
                                <span className="mt-[40px]">$40</span>
                            </div>

                        </div>
                        <div className="section_cards flex items-center mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (10).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Roast Beef with Vegetable</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$40</span>
                            </div>
                        </div>
                        <div className="section_cards flex items-center mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (11).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Marrkesh Vegetetarian Curruy</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400] ">Shuck the scallop to that used for oysters</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$30</span>
                            </div>
                        </div>
                        <div className="section_cards flex items-center justify-between mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img
                                        src="/IMAGE (12).png"
                                        alt="Dish"
                                        className="w-[84px] h-[84px] rounded-full object-cover"
                                    />
                                </div>

                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">
                                        Spicy Vegan Potato Curry
                                    </h1>

                                    <p className="text-[20px] font-[400] font-['Josefin_Sans']">
                                        Bread, olive oil, garlic, black pepper
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$30</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                <div className="section_left mt-[100px]">
                    <div className="section_bir">
                        <div className="section_bir_h1">
                            <h1 className="font-[400] text-[24px] font-['Cormorant_Infant'] mb-[30px]">Dessert</h1>
                        </div>
                        <div className="section_cards flex items-center justify-between mb-[40px] gap-[20px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (13).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Apple Pie with Cream</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>

                            <div className="flex items-center w-[280px] gap-[15px]">
                                <div className="w-full h-[1px] bg-[#AAAAAA] mt-[50px]"></div>
                                <span className="mt-[40px]">$40</span>
                            </div>

                        </div>
                        <div className="section_cards flex items-center mb-[40px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="section_i">
                                    <img src="/IMAGE (14).png" alt="Dish" className="w-[84px] h-[84px] rounded-full object-cover" />
                                </div>
                                <div className="section_s">
                                    <h1 className="text-[30px] font-[400] font-['Cormorant_Infant']">Lemon Meringue Pie</h1>
                                    <p className="text-[20px] font-['Josefin_Sans'] font-[400]">Shuck the scallop to that used oysters</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-1 ml-[40px]">
                                <div className="border-b border-[#AAAAAA] flex-1 mt-[50px]"></div>
                                <span className="ml-[15px] mt-[40px]">$40</span>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
    )
}

export default MainMenu;