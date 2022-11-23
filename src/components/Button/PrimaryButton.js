import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full">
            {children}
        </button>
    );
};

export default PrimaryButton;