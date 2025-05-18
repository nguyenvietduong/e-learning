import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import sliderConfig from "../config/sliderConfig";

export default function Slider() {

    return (
        <div className="w-full mx-auto overflow-hidden shadow">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: sliderConfig.autoplayDelay }}
                loop={sliderConfig.loop}
                pagination={{ clickable: sliderConfig.paginationClickable }}
                className="h-[550px]"
            >
                {sliderConfig.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.image}
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 z-10"></div>

                            <div className="relative z-20 flex flex-col md:flex-row h-full items-center justify-center px-6 md:px-20 gap-8">
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src={slide.image}
                                        alt={slide.captionKey}
                                        className="rounded-xl shadow-lg max-h-[300px] object-contain"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.captionKey}</h3>
                                    <p className="text-md md:text-lg opacity-90 mb-4">
                                        Luyện tập từ vựng, ngữ pháp và giao tiếp tiếng Hàn cùng KoLearn từ cơ bản.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                        <Link
                                            to="/lessons"
                                            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                                        >
                                            📚 Danh Sách Bài Học
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="px-6 py-2 rounded-full bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 transition"
                                        >
                                            📩 Liên Hệ Chúng Tôi
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
