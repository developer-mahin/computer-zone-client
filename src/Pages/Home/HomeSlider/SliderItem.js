import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import "./Slider.css"

const SliderItem = ({slide}) => {

    const {image, id, prev, next}= slide

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full lg:px-0 px-3">
      <div className="banner-img w-full lg:h-screen">
        <img src={image} className="w-full h-full object-fill" alt="" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-24 lg:top-1/2 lg:w-1/2 w-full top-28">
        <div className="">
          <h2 className="lg:text-6xl text-2xl text-white lg:py-0 py-2">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white lg:text-xl text-sm lg:mt-8 lg:mb-8">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center gap-5 mt-2">
          <PrimaryButton>View Details</PrimaryButton>
          <SecondaryButton>Shop Now</SecondaryButton>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 ">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-[#bdbcbc67] hover:bg-primary text-white border-none"
        >
          {" "}
          <FaArrowLeft></FaArrowLeft>{" "}
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-[#bdbcbc67] hover:bg-primary text-white border-none"
        >
          {" "}
          <FaArrowRight></FaArrowRight>{" "}
        </a>
      </div>
    </div>
    );
};

export default SliderItem;