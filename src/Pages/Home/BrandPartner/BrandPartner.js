import React from 'react';
import partnerBackground from "../../../Assets/images/pertner-bg.jpg"

const BrandPartner = () => {

    const partner = {
        backgroundImage: `url(${partnerBackground})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div>
            <div style={partner}>
                <div className='container mx-auto py-9'>
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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-28 gap-y-8'>

                    <div className=''>
                        <img className='w-full h-12 ' src="https://assets-global.website-files.com/5e4319072e6fb910d3a508a6/629f7c2cc54f1e3d86548ffa_MSFT%20Logo.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dell_Technologies_logo.svg/1024px-Dell_Technologies_logo.svg.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12' src="https://i.ibb.co/KxFz0jV/Font-HP-Logo-removebg-preview.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/TOSHIBA_Logo.png/1200px-TOSHIBA_Logo.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://i.ibb.co/yySZFLQ/778-7786376-laptop-vaio-encapsulated-postscript-sony-logo-clipart-sony-removebg-preview.png" alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full h-12 ' src="https://i.ibb.co/4pb4Z95/png-clipart-acer-logo-laptop-acer-aspire-computer-logo-lenovo-logo-electronics-text-removebg-preview.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BrandPartner;