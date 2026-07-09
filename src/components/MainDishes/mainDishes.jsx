import dishesData from "./dishesData";

const MainDishes = () => {
    return (
        <section className="py-[140px]">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <img src="/Frame (5).png" alt="" />
                    <h1 className="mt-5 text-[40px] font-['Cormorant_Infant'] text-[#292E36]">Popular Dishes</h1>
                    <p className="max-w-[700px] mt-5 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                        There is a game between the waiters in restaurant to see who serves
                        the food to each table fastest. That led to attempting the Guinness
                        Record.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-[30px] mt-[60px]">
                    {dishesData.map((item) => (
                        <div key={item.id}>
                            <div className="overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-[325px] object-cover" />
                            </div>
                            <div className="flex justify-between items-center border-b border-[#DCDCDC] py-5">
                                <h1 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">{item.title}</h1>
                                <h2 className="text-[30px] font-['Cormorant_Infant'] text-[#292E36]">{item.price}</h2>
                            </div>
                            <p className="mt-4 text-[20px] leading-[32px] text-[#555555] font-['Josefin_Sans']">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-[70px]">
                    <button className="border border-[#E1B168] px-[55px] py-[18px] text-[#E1B168] text-[22px] font-['Josefin_Sans'] hover:bg-[#E1B168] hover:text-white duration-300 cursor-pointer">
                        See all dishes
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MainDishes;