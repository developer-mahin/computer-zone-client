import React from 'react';
import { toast } from 'react-hot-toast';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import "../../Home/HomeSlider/Slider.css"

const ContactSection = () => {

    const contactBg = {
        backgroundImage: `url(${"https://factbites.com/wp-content/uploads/2020/12/CTO_serv_background.jpg"})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "71px 0px"
    };

    const handleContact = (event)=>{
        event.preventDefault()
        toast.success("Successfully submit")
    }


    return (

        <div style={contactBg}>
            <div className="lg:w-1/3 w-full mx-auto px-3 lg:px-0">
                <div className=" text-center">
                    <div className="">
                        <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                            Contact Us
                        </p>
                    </div>
                    <h2 className="mb-6 font-sans text-3xl font-regular tracking-tight text-white sm:text-4xl sm:leading-none">
                        Stay connected with us
                    </h2>
                </div>
                <form onSubmit={handleContact}>
                    <input
                        className="w-full  py-3 px-6 rounded-xl my-4 border-2"
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        id=""
                        required
                    />
                    <input
                        className="w-full  py-3 px-6 rounded-xl my-4 border-2"
                        placeholder="Subject"
                        type="text"
                        name="text"
                        id=""
                        required
                    />
                    <textarea
                        className="w-full py-3 px-6 rounded-xl my-4 border-2"
                        placeholder="Your message"
                        name="message"
                        id=""
                        required
                        cols="30"
                        rows="3"
                    ></textarea>
                    <div className="text-center">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactSection;