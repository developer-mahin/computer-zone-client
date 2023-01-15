import React from 'react';
import partnerBackground from "../../../Assets/images/pertner-bg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay"
import "./BrandPartner.css"

const BrandPartner = () => {

    const partner = {
        backgroundImage: `url(${partnerBackground})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const swiperItems = [
        {
            img: "https://assets-global.website-files.com/5e4319072e6fb910d3a508a6/629f7c2cc54f1e3d86548ffa_MSFT%20Logo.png"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dell_Technologies_logo.svg/1024px-Dell_Technologies_logo.svg.png"
        },
        {
            img: "https://i.ibb.co/KxFz0jV/Font-HP-Logo-removebg-preview.png"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/TOSHIBA_Logo.png/1200px-TOSHIBA_Logo.png"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png"
        },
        {
            img: "https://i.ibb.co/yySZFLQ/778-7786376-laptop-vaio-encapsulated-postscript-sony-logo-clipart-sony-removebg-preview.png"
        },
        {
            img: "https://i.ibb.co/4pb4Z95/png-clipart-acer-logo-laptop-acer-aspire-computer-logo-lenovo-logo-electronics-text-removebg-preview.png"
        }
    ]

    return (
        <div>
            <div style={partner}>
                <div className='container mx-auto py-9 px-3'>
                    <div className="">
                        <p className="inline-block px-3 py-px font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                            BRAND
                        </p>
                        <h2 className="text-3xl font-bold">
                            Our Brand / Partners
                        </h2>
                    </div>
                </div>
            </div>
            <div className='container mx-auto lg:py-14 py-5 px-4'>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        }
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 800 }}
                    className="mySwiper"
                >
                    {
                        swiperItems.map((item, index) => <SwiperSlide key={index}>

                            <img src={item.img} alt="" />

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default BrandPartner;