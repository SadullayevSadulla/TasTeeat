import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MainSwiper = () => {
    return (
        <section>
            <div className="bg-[#292E36] py-[120px]">
                <div className="container mx-auto">
                    <div className="mb-[60px]">
                        <img src="/Frame (6).png" alt="" />
                        <h1 className="mt-5 text-white text-[40px] font-['Cormorant_Infant']">
                            Our Clients Say
                        </h1>
                        <p className="mt-3 text-[#FFFFFF] font-['Josefin_Sans'] text-[18px]">
                            We love to hear from customers, so please leave a comment or say hello in an email.
                        </p>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="bg-[#343942] w-full h-[340px] p-[35px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="relative">
                                            <img
                                                src="/Frame (7).png"
                                                alt=""
                                                className="w-[90px] h-[90px] rounded-full object-cover"
                                            />
                                            <img
                                                src="/Quote.png"
                                                alt=""
                                                className="absolute -top-1 -left-1"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-white text-[30px] font-['Cormorant_Infant']">
                                                Natasha D
                                            </h2>
                                            <p className="text-[#E1B168] text-[18px] font-['Josefin_Sans']">
                                                Newyork
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-[#797E89] my-8"></div>
                                <p className="text-white text-[20px] leading-9 font-['Cormorant_Infant']">
                                    They known for its fabulous taste and food.
                                    Anywhere you go your hunger is satisfied.
                                    The best chicken & burgers those are yummy.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#343942] w-full h-[340px] p-[35px]">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <img
                                            src="/Frame (8).png"
                                            alt=""
                                            className="w-[90px] h-[90px] rounded-full object-cover"
                                        />
                                        <img
                                            src="/Quote.png"
                                            alt=""
                                            className="absolute -top-1 -left-1"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-[30px] font-['Cormorant_Infant']">
                                            Jack Sparrow
                                        </h2>
                                        <p className="text-[#E1B168] text-[18px] font-['Josefin_Sans']">
                                            Salt Lake City
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b border-[#797E89] my-8"></div>
                                <p className="text-white text-[20px] leading-9 font-['Cormorant_Infant']">
                                    I have visited this fantastic restaurant on
                                    several occasions, food is absolutely
                                    outstanding & attention to detail is in
                                    league of its own.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#343942] w-full h-[340px] p-[35px]">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <img
                                            src="Frame (9).png"
                                            alt=""
                                            className="w-[90px] h-[90px] rounded-full object-cover"
                                        />
                                        <img
                                            src="/Quote.png"
                                            alt=""
                                            className="absolute -top-1 -left-1"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-[30px] font-['Cormorant_Infant']">
                                            Martin Doe
                                        </h2>
                                        <p className="text-[#E1B168] text-[18px] font-['Josefin_Sans']">
                                            San Diego
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b border-[#797E89] my-8"></div>
                                <p className="text-white text-[20px] leading-9 font-['Cormorant_Infant']">
                                    Perfectly known for delicious food.
                                    Anywhere you go your hunger is
                                    satisfied and they always give best
                                    fried chicken & burgers.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#343942] w-full h-[340px] p-[35px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="relative">
                                            <img
                                                src="/Frame (7).png"
                                                alt=""
                                                className="w-[90px] h-[90px] rounded-full object-cover"
                                            />
                                            <img
                                                src="/Quote.png"
                                                alt=""
                                                className="absolute -top-1 -left-1"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-white text-[30px] font-['Cormorant_Infant']">
                                                Natasha D
                                            </h2>
                                            <p className="text-[#E1B168] text-[18px] font-['Josefin_Sans']">
                                                Newyork
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-[#797E89] my-8"></div>
                                <p className="text-white text-[20px] leading-9 font-['Cormorant_Infant']">
                                    They known for its fabulous taste and food.
                                    Anywhere you go your hunger is satisfied.
                                    The best chicken & burgers those are yummy.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#343942] w-full h-[340px] p-[35px]">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <img
                                            src="/Frame (8).png"
                                            alt=""
                                            className="w-[90px] h-[90px] rounded-full object-cover"
                                        />
                                        <img
                                            src="/Quote.png"
                                            alt=""
                                            className="absolute -top-1 -left-1"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-[30px] font-['Cormorant_Infant']">
                                            Jack Sparrow
                                        </h2>
                                        <p className="text-[#E1B168] text-[18px] font-['Josefin_Sans']">
                                            Salt Lake City
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b border-[#797E89] my-8"></div>
                                <p className="text-white text-[20px] leading-9 font-['Cormorant_Infant']">
                                    I have visited this fantastic restaurant on
                                    several occasions, food is absolutely
                                    outstanding & attention to detail is in
                                    league of its own.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <section className="w-full h-[600px] bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/IMAGE (15).png')" }}></section>
        </section>
    );
};

export default MainSwiper;