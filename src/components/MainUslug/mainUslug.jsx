import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
    {
        title: "Уютное кафе",
        image:
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Тёплая атмосфера",
        image:
            "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Дружелюбный персонал",
        image:
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    },
];

const MainUslug = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const active = services[activeIndex] || services[0];

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
        setActiveIndex((i) => (i - 1 + services.length) % services.length);
    };
    const handleNext = () => {
        swiperRef.current?.slideNext();
        setActiveIndex((i) => (i + 1) % services.length);
    };

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="section_left flex-1">
                    <div className="left_h1 mb-8">
                        <h1 className="text-3xl font-bold text-[#1a1a1a]">
                            Цены и абонементы
                        </h1>
                    </div>
                    <div className="left_card flex flex-col gap-5">
                        {[
                            "Зимний сезон 2021-2022",
                            "Абонементы",
                            "Скидки",
                            "Дополнительные услуги",
                        ].map((label) => (
                            <button
                                key={label}
                                type="button"
                                className="card bg-[#8D86C9] flex items-center justify-between px-5 py-4 "
                            >
                                <p className="text-white text-lg">{label}</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M20 12H4m0 0l6-6m-6 6l6 6"
                                        className="text-white"
                                    />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="section_right flex-1">
                    <div className="right_h1 mb-8 flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-[#1a1a1a]">Услуги</h1>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={handlePrev}
                                aria-label="Предыдущая услуга"
                                className="bg-[#8D86C9] hover:bg-[#786fc0] transition-colors w-10 h-10 rounded-md flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M20 12H4m0 0l6-6m-6 6l6 6"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Следующая услуга"
                                className="bg-[#8D86C9] hover:bg-[#786fc0] transition-colors w-10 h-10 rounded-md flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 12h16m0 0l-6-6m6 6l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="relative rounded-lg overflow-hidden h-[260px]">
                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                            <p className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
                                {active.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainUslug;