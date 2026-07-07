const MainDishes = () => {
    return (
        <section className="py-[140px]">
            <div className="main_dishes container">
                <div className="main_dishes_top flex flex-col items-center text-center">
                    <div className="main_dishes_img">
                        <img src="/Frame (5).png" alt="" className="mx-auto" />
                    </div>
                    <div className="dishes_text mt-5">
                        <h1 className="text-[40px] font-['Cormorant_Infant'] text-[#292E36]">
                            Popular Dishes
                        </h1>
                        <p className="max-w-[700px] mx-auto mt-5 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                            There is a game between the waiters in restaurant to see who serves the
                            food to each table fastest. That led to attempting the Guinness Record.
                        </p>
                    </div>
                </div>

                <div className="dishes_cards grid grid-cols-4 gap-[30px] mt-[60px]">
                    <div className="dishes_card">
                        <div className="card_img overflow-hidden">
                            <img
                                src="/IMAGE (18).png"
                                alt=""
                                className="w-full h-[325px] object-cover"
                            />
                        </div>
                        <div className="card_text flex justify-between items-center border-b border-[#DCDCDC] py-5">
                            <h1 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                Chicken Manjoori
                            </h1>
                            <h2 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                $15
                            </h2>
                        </div>
                        <p className="mt-4 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                            Dish relished by all age groups as a starter dish at parties.
                        </p>
                    </div>
                    <div className="dishes_card">
                        <div className="card_img overflow-hidden">
                            <img
                                src="/IMAGE (19).png"
                                alt=""
                                className="w-full h-[325px] object-cover"
                            />
                        </div>
                        <div className="card_text flex justify-between items-center border-b border-[#DCDCDC] py-5">
                            <h1 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                Hotdog
                            </h1>
                            <h2 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                $10
                            </h2>
                        </div>
                        <p className="mt-4 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                            Grilled sausage served in the slit of a partially sliced bun.
                        </p>
                    </div>
                    <div className="dishes_card">
                        <div className="card_img overflow-hidden">
                            <img
                                src="/IMAGE (20).png"
                                alt=""
                                className="w-full h-[325px] object-cover"
                            />
                        </div>
                        <div className="card_text flex justify-between items-center border-b border-[#DCDCDC] py-5">
                            <h1 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                Fresh Salmon
                            </h1>
                            <h2 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                $5
                            </h2>
                        </div>
                        <p className="mt-4 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                            Beat the health blues with our Super Immune Blue Juice Recipe.
                        </p>
                    </div>
                    <div className="dishes_card">
                        <div className="card_img overflow-hidden">
                            <img src="/IMAGE (21).png" alt="" className="w-full h-[325px] object-cover" />
                        </div>
                        <div className="card_text flex justify-between items-center border-b border-[#DCDCDC] py-5">
                            <h1 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">Veg Burger</h1>
                            <h2 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">$10</h2>
                        </div>
                        <p className="mt-4 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">Burgers may be made from ingredients like beans.</p>
                    </div>
                </div>
                <div className="dishes_bottom flex justify-center mt-[70px]">
                    <button className="border border-[#E1B168] px-[55px] py-[18px] text-[#E1B168] text-[22px] font-['Josefin_Sans'] hover:bg-[#E1B168] hover:text-white cursor-pointer">See all dishes</button>
                </div>
            </div>
        </section>
    )
}

export default MainDishes;