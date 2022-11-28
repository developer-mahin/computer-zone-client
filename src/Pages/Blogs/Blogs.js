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
        <div className='py-10'>
            <div className=" text-center">
                <div className="mt-3">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        Blogs
                    </p>
                </div>
            </div> 
            <section className="container mx-auto pb-20 py-10 px-3">
                <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6">

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