import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Testimonial = () => {


    const testimonialInfo = [
        {
            id: 1,
            name: "Mahin Khan",
            img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
            review: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra."
        },
        {
            id: 2,
            name: "Mahin Khan",
            img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
            review: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra."
        },
        {
            id: 3,
            name: "Mahin Khan",
            img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
            review: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra."
        },
        {
            id: 4,
            name: "Mahin Khan",
            img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
            review: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra."
        },
        {
            id: 5,
            name: "Mahin Khan",
            img: "https://media.istockphoto.com/id/1244527145/photo/happy-smiling-woman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=3q7ImqhEDOdYptyaZLYmjqtJgMBoY42lGDkzUi0NGBo=",
            review: "Nam tempus turpis at metus scelerisque placerat nulla deumantos sollicitudin felis. Pellentesque diam elementum an lobortis at, mollis duto an risus. Sedcuman des faucibus sullamcorper mattis fusce de molestie elit a lorem tempus delo scelerisque blandit est cursus nam mattis et lectus blandit pharetra."
        },
    ]


    return (
        <div className='lg:py-14 py-10 container mx-auto'>
            <div className=" text-center">
                <div className="">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        Testimonial
                    </p>
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Customer Review
                    </h2>
                </div>
            </div>
            <div className='py-10'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <>
                        {
                            testimonialInfo.map(info => <SwiperSlide
                                key={info.id}
                            >
                                <div className='lg:px-44'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img src={info.img} className="w-40 h-40 rounded-full object-cover" alt="" />
                                        </div>
                                        <div className='text-center py-6'>
                                            <h3 className='font-semibold text-xl'>{info.name}</h3>
                                            <p>{info.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;