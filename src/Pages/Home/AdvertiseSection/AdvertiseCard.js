import React from 'react';

const AdvertiseCard = ({ data }) => {
    const { picture, name, description } = data;

    return (
        <div className="card w-full bg-base-100 shadow-xl border">
            <div><img src={picture} className="w-full lg:h-96 h-60" alt="Shoes" /></div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;