import React from 'react';
import img1 from "../../../Assets/slider-images/image-1.png";
import img2 from "../../../Assets/slider-images/image-2.jpg";
import img3 from "../../../Assets/slider-images/image-3.jpg";
import img4 from "../../../Assets/slider-images/image-4.png";
import img5 from "../../../Assets/slider-images/image-5.jpg";
import img6 from "../../../Assets/slider-images/image-6.jpg";
import SliderItem from './SliderItem';


const sliderData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2,
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3,
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4,
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5,
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6,
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1,
    },
];

const HomeSlider = () => {
    return (
        <div  className="carousel w-full"> 
            {
                sliderData.map(slide => <SliderItem

                    key={slide.id} slide={slide}

                ></SliderItem>)
            }
        </div>
    );
};

export default HomeSlider;