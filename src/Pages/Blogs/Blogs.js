import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BigSpinner from '../../components/Spinner/BigSpinner';
import SingleBLog from './SingleBLog';



const Blogs = () => {

    const blogs = useLoaderData()
    const navigation = useNavigation()

    if (navigation.state === "loading") {
        return <BigSpinner></BigSpinner>
    }

    return (
        <div className=''>
            <div className=" text-center">
                <div className="mt-3">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        Blogs
                    </p>
                    {/* <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Explore By Category
                    </h2> */}
                </div>
            </div>
            <section className=" ">
                <div className="container p-6 lg:px-0 px-3 mx-auto space-y-6 sm:space-y-12">

                    {blogs.map(blog => <SingleBLog

                        key={blog._id}
                        blog={blog}

                    ></SingleBLog>)
                    }


                </div>
            </section>
        </div>
    );
};

export default Blogs;