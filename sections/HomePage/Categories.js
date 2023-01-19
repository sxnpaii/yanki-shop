import CategoriesStyles from "../../styles/forPages/HomePage/sections/Categories.module.scss";
// images
import Image from "next/image";
import ctgrs1 from "../../img/ctgrs1.png";
import ctgrs2 from "../../img/ctgrs2.png";
import ctgrs3 from "../../img/ctgrs3.png";
import ctgrs4 from "../../img/ctgrs4.png";
// Swiper slides
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// react hooks
import { useEffect, useState } from "react";


const Categories = () => {
    return (
        <section className={CategoriesStyles.innerCategories}>
            <h2 className="display-6">Категории</h2>
            <Swiper
                spaceBetween={25}
                loop={true}
                slidesPerGroup={1}
                slidesPerView={"auto"}
                centeredSlides={true}   
                autoplay={
                    {
                        delay: 2500,
                        disableOnInteraction: false,

                    }
                }
                // navigation={true}
                // centeredSlides={true}

                breakpoints={
                    {

                        576: {
                            centeredSlides: true,
                            slidesPerView: 1

                        },
                        768: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        992: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        },
                        1200: {
                            slidesPerView: 4,
                            centeredSlides: false
                        }
                    }
                }
                modules={[Autoplay, Navigation]}

                className={`mySwiper ${CategoriesStyles.slider}`}>
                <SwiperSlide className={CategoriesStyles.swiperSlide}>
                    <Image src={ctgrs1} alt="" placeholder="blur" />

                    <a href="">
                        <h6>Куртки</h6>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={CategoriesStyles.swiperSlide}>
                    <Image src={ctgrs2} alt="" placeholder="blur" />
                    <a href="">
                        <h6>Пальто</h6>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={CategoriesStyles.swiperSlide}>
                    <Image src={ctgrs3} alt="" placeholder="blur" />
                    <a href="">
                        <h6>Шубы</h6>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={CategoriesStyles.swiperSlide}>
                    <Image src={ctgrs4} alt="" placeholder="blur" />
                    <a href="">
                        <h6>Парки</h6>
                    </a>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Categories;
