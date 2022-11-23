import React from 'react';

const SecondaryButton = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full">
            {children}
        </button>
    );
};

export default SecondaryButton;