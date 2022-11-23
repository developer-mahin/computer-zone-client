import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const footerBg = {
        backgroundImage: `url(${"https://siddharthpetro.com/wp-content/uploads/2019/09/Footer-Background-Image.png"})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={footerBg}>
            <footer className="py-16 text-white container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-3">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-semibold text-gray-200">SERVICES</h2>
                        <div className="flex flex-col space-y-2 text-sm text-[#cfcfcf]">
                            <Link to="/">
                                Emergency Checkup
                            </Link>
                            <Link to="/">
                                Monthly Checkup
                            </Link>
                            <Link to="/">
                                Weekly Checkup
                            </Link>
                            <Link to="/">
                                Deep Checkup
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-semibold text-gray-200">ORAL HEALTH</h2>
                        <div className="flex flex-col space-y-2 text-sm text-[#cfcfcf]">
                            <Link to="/">
                                Fluoride Treatment
                            </Link>
                            <Link to="/">
                                Cavity Filling
                            </Link>
                            <Link to="/">
                                Teeth Whitening
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-semibold text-gray-200">OUR ADDRESS</h2>
                        <div className="flex flex-col space-y-2 text-sm text-[#cfcfcf]">
                            <Link to="/">
                                New York - 101010 Hudson
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-semibold text-gray-200">OUR ADDRESS</h2>
                        <div className="flex flex-col space-y-2 text-sm text-[#cfcfcf]">
                            <Link to="/">
                                New York - 101010 Hudson
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 lg:pt-28 pt-9 text-sm">
                    <span className="">© Copyright 2022 All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;