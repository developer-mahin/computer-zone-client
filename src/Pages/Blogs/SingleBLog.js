import React from 'react';
import { Link } from 'react-router-dom';

const SingleBLog = ({ blog }) => {

    const { title, description, _id, image } = blog;

    return (
        <Link
            to={`/blogDetails/${_id}`}
            className="hover:no-underline focus:no-underline border shadow-lg rounded-lg"
        >
            <img
                src={image}
                alt=""
                className="object-fill w-full h-64 rounded-lg sm:h-96 lg:col-span-7"
            />
            <div className=" space-y-2 lg:col-span-5 px-4 py-2">
                <h3 className="text-2xl font-semibold sm:text-4xl hover:underline focus:underline">
                    {title}
                </h3>
                <p>

                    {
                        description && ` ${description.slice(0, 300) + "...."}`
                    } <span className='text-blue-600 hover:underline'
                    >Read More</span>

                </p>
            </div>
        </Link>
    );
};

export default SingleBLog;