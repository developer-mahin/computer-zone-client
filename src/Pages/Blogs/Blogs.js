import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className=''>
            <div className=" text-center">
                <div className="">
                    <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        CATEGORIES
                    </p>
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                        Explore By Category
                    </h2>
                </div>
            </div>
            <section className=" ">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link
                        rel="noopener noreferrer"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
                    >
                        <img
                            src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
                            alt=""
                            className="object-fill w-full h-64 rounded sm:h-96 lg:col-span-7 "
                        />
                        <div className=" space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                Difference between SQL and NoSQL
                            </h3>
                            <span className="text-xs ">
                                November 09, 2022
                            </span>
                            <p>
                                <p>
                                    Remember that SQL dialects share many properties though they
                                    interface with distinct databases. Flavors of NoSQL vary far
                                    more across their attendant systems, so comparison can be more
                                    useful between multiple non-relational technologies vs. SQL
                                    generally.
                                </p>

                                <p>
                                    Perhaps the most recognizable SQL dialect is MySQL, an open
                                    source and free RDBMS (though available through proprietary
                                    licenses as well). Its use is widespread in web applications,
                                    and it is known for compatibility, support, and good
                                    performance in the average case. MySQL has also made
                                    concessions to NoSQL practitioners with features like a JSON
                                    data type, the “Document Store,” and support for sharding
                                    (horizontal scaling).
                                </p>
                            </p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            rel="noopener noreferrer"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  border shadow rounded"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 "
                                src="https://miro.medium.com/max/800/1*ulCspc56K_swYE1uuel_TA.png"
                                alt=""
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    What is JWT?
                                </h3>
                                <span className="text-xs ">
                                    November 09, 2022
                                </span>
                                <p>
                                    JSON Web Token (JWT) is an open standard (RFC 7519) that
                                    defines a compact and self-contained way for securely
                                    transmitting information between parties as a JSON object.
                                    This information can be verified and trusted because it is
                                    digitally signed. JWTs can be signed using a secret (with the
                                    HMAC algorithm) or a public/private key pair using RSA or
                                    ECDSA.
                                </p>
                            </div>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  border shadow rounded"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 "
                                src="https://uploads-ssl.webflow.com/61bb34defcff34f786b458ce/620e820c022217b8ff36eca0_JWT%20Authentication%20in%20React%20Scheme.jpg"
                                alt=""
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    How does JWT work?
                                </h3>
                                <span className="text-xs ">
                                    November 09, 2022
                                </span>
                                <p>
                                    JWTs differ from other web tokens in that they contain a set
                                    of claims. Claims are used to transmit information between two
                                    parties. What these claims are depends on the use case at
                                    hand. For example, a claim may assert who issued the token,
                                    how long it is valid for, or what permissions the client has
                                    been granted.
                                    <br />
                                    Once decoded, you will get two JSON strings:
                                    <ul>
                                        <li className="list-decimal">
                                            The header and the payload.
                                        </li>
                                        <li className="list-decimal">The signature.</li>
                                    </ul>
                                </p>
                            </div>
                        </Link>
                        <Link
                            rel="noopener noreferrer"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline  border shadow rounded"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 "
                                src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp"
                                alt=""
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    What is the difference between javascript and Node JS?
                                </h3>
                                <span className="text-xs ">
                                    November 09, 2022
                                </span>
                                <p>
                                    Javascript is a Scripting language. It is mostly abbreviated
                                    as JS. It can be said that Javascript is the updated version
                                    of the ECMA script. Javascript is a high-level programming
                                    language that uses the concept of Oops but it is based on
                                    prototype inheritance.
                                </p>
                                <p>
                                    NodeJS is a cross-platform and opensource Javascript runtime
                                    environment that allows the javascript to be run on the
                                    server-side. Nodejs allows Javascript code to run outside the
                                    browser. Nodejs comes with a lot of modules and mostly used in
                                    web development.{" "}
                                </p>
                            </div>
                        </Link>
                    </div>
                    <Link
                        rel="noopener noreferrer"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
                    >
                        <img
                            src="https://miro.medium.com/max/1200/1*9lmHM-CypCHEOtNd_dfRRw.png"
                            alt=""
                            className="object-fill w-full h-64 rounded sm:h-96 lg:col-span-7 "
                        />
                        <div className=" space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                How does NodeJS handle multiple requests at the same time?
                            </h3>
                            <span className="text-xs ">
                                November 09, 2022
                            </span>
                            <p>
                                <p>
                                    NodeJS receives multiple client requests and places them into
                                    EventQueue. NodeJS is built with the concept of event-driven
                                    architecture. NodeJS has its own EventLoop which is an
                                    infinite loop that receives requests and processes them.
                                </p>
                                <p>
                                    node. js can process upwards of 1000 requests per second and
                                    speed limited only to the speed of your network card. Note
                                    that it's 1000 requests per second not clients connected
                                    simultaneously. It can handle the 10000 simultaneous clients
                                    without issue.
                                </p>
                            </p>
                        </div>
                    </Link>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="px-6 py-3 text-sm font-semibold hover:underline bg-cyan-400 rounded-full  "
                        >
                            Load more posts...
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;