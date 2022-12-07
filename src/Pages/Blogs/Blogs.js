import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import BigSpinner from '../../components/Spinner/BigSpinner';
import SingleBLog from './SingleBLog';



const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)


    // axios.get("https://computer-zone-server.vercel.app/blogs")
    //     .then(function (response) {
    //         setLoading(true)
    //         setBlogs(response.data)
    //         setLoading(false)
    //     })
    //     .catch(function (err) {
    //         console.log(err.message);
    //     })
    //     .finally(function () {

    //     })

    useEffect(() => {
        setLoading(true)
        fetch("https://computer-zone-server.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })

    }, [])


    return (
        <>

            {
                loading ? <BigSpinner></BigSpinner> : <>

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

                </>
            }

        </>
    );
};

export default Blogs;