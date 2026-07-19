import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MainSwiper = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const categories = [
        {
            img: "/lkjhg.png",
            label: "Pulvinar aliquam",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."

        },
        {
            img: "/njiuhgvbhjuhygv.png",
            label: "Pretiumodio",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/frgthygtfrgthy.png",
            label: "Aliquet consectetur",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/iuhbybjkminub.png",
            label: "Blanditaugue",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/ugfjsbb.png",
            label: "Lorem lacus",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/jgnkjngjng.png",
            label: "Sederat",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/njiuhgvbhjuhygv.png",
            label: "Pulvinar aliquam",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/frgthygtfrgthy.png",
            label: "Aliquet consectetur",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/iuhbybjkminub.png",
            label: "Blanditaugue",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
        {
            img: "/ugfjsbb.png",
            label: "Lorem lacus",
            text: "Arcu elit massa amet turpis vel consequat pellentesque sit."
        },
    ];

    return (
        <main className="bg-white py-10 mt-[150px]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl md:text-[26px] font-extrabold tracking-tight text-slate-900">
                        Тренерский состав
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                ref={prevRef}
                                aria-label="Previous"
                                className="w-9 h-9 flex items-center justify-center  bg-violet-500  text-white transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                ref={nextRef}
                                aria-label="Next"
                                className="w-9 h-9 flex items-center justify-center  bg-violet-500  text-white transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                >
                    {categories.map((member, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-xl cursor-pointer">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-[166px] h-[240px] object-cover rounded-sm"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                                <h1 className="text-[15px] font-semibold text-slate-800 text-center max-w-[196px] leading-snug">
                                    {member.label}
                                </h1>
                                <p className="font-[400] text-[14px] text-slate-500 text-center max-w-[196px] leading-relaxed">
                                    {member.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
};

export default MainSwiper;