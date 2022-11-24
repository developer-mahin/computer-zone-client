import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from "../../Assets/images/logo.png"


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("successfully logout");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const menuItems = (
        <React.Fragment>
            <li>
                <Link className="font-semibold" to="/home">
                    Home
                </Link>
            </li>
            <div>
                {
                    user?.uid ? <><li
                        onClick={handleLogOut}
                        className=''
                    >
                        <span className="lg:btn lg:btn-primary lg:bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary lg:text-white font-semibold lg:rounded-full">
                            Log Out
                        </span>
                    </li></> : <div className='md:flex'>

                        <li tabIndex={0}>
                            <Link className="font-semibold justify-between" to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="font-semibold" to="/signup">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                }
            </div>



            <li>
                <div className='relative inline-block '>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className='relative z-10 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300 focus:ring  focus:outline-none lg:px-2 flex items-center'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5 hidden md:block'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                        </svg>
                        <span className='md:hidden block font-medium'>Dashboard</span>
                    </button>

                    {isDropdownOpen && (
                        <div className='absolute z-20 w-56 lg:right-0 py-2 mt-2 bg-white rounded-md shadow-xl '>
                            <Link
                                to='/dashboard'
                                className='flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '
                            >
                                <svg
                                    className='w-5 h-5 mx-1'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
                                        fill='currentColor'
                                    ></path>
                                    <path
                                        d='M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z'
                                        fill='currentColor'
                                    ></path>
                                </svg>

                                <span className='mx-1'>Dashboard</span>
                            </Link>

                            <hr className='border-gray-200' />

                        </div>
                    )}
                </div>

            </li>
        </React.Fragment>
    );

    return (
        <div className="">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={1}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="h-10">
                        <img src={logo} className="h-full" alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">{menuItems}</ul>

                </div>
                <div className="navbar-end flex md:hidden">
                    <label
                        htmlFor="dashboard-drawer"
                        tabIndex={2}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;