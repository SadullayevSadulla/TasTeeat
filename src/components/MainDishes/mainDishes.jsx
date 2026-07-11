import dishesData from "./dishesData";

const MainDishes = () => {
    return (
        <section className="py-[70px] lg:py-[140px]">
            <div className="container">
                <div className="flex flex-col items-center text-center px-4">
                    <img src="/Frame (5).png" alt="" className="w-[40px] lg:w-auto" />
                    <h1 className="mt-5 text-[28px] sm:text-[34px] lg:text-[40px] font-['Cormorant_Infant'] text-[#292E36]">
                        Popular Dishes
                    </h1>
                    <p className="max-w-[700px] mt-5 text-[16px] lg:text-[20px] leading-[26px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
                        There is a game between the waiters in restaurant to see who serves
                        the food to each table fastest. That led to attempting the Guinness
                        Record.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[30px] mt-[40px] lg:mt-[60px]">
                    {dishesData.map((item) => (
                        <div key={item.id}>
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[220px] sm:h-[260px] xl:h-[325px] object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-center border-b border-[#DCDCDC] py-4 lg:py-5 gap-[10px]">
                                <h1 className="text-[22px] lg:text-[30px] font-['Cormorant_Infant'] text-[#292E36]">
                                    {item.title}
                                </h1>
                                <h2 className="text-[22px] lg:text-[30px] font-['Cormorant_Infant'] text-[#292E36] whitespace-nowrap">
                                    {item.price}
                                </h2>
                            </div>
                            <p className="mt-4 text-[15px] lg:text-[20px] leading-[24px] lg:leading-[32px] text-[#555555] font-['Josefin_Sans']">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-[50px] lg:mt-[70px]">
                    <button className="border border-[#E1B168] px-[35px] lg:px-[55px] py-[14px] lg:py-[18px] text-[#E1B168] text-[16px] lg:text-[22px] font-['Josefin_Sans'] hover:bg-[#E1B168] hover:text-white duration-300 cursor-pointer">
                        See all dishes
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainDishes;