import React from 'react';

const BigSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-600"></div>
        </div>
    );
};

export default BigSpinner;