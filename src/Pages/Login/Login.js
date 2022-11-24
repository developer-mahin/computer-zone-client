import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import loginJson from "../../Assets/Lottie file/72874-user-profile-v2.json"
import SmallSpinner from '../../components/Spinner/SmallSpinner';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [loading, setLoading] = useState(false);


    const handleLogin = (data, event) => {
        setLoading(true)
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // setLoginUserEmail(data.email);
                //   getAccessToken(data.email);
                event.target.reset();
                toast.success("successfully login");
                setLoading(false);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    }


    // const getAccessToken = (email) => {
    //     fetch(`https://doctor-portal-server-nine.vercel.app/jwt?email=${email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.accessToken) {
    //                 localStorage.setItem("doctors-portal-token", data.accessToken);
    //                 navigate(from, { replace: true });
    //             }
    //         });
    // };



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                saveUserFromDB(
                    user?.displayName,
                    user?.email,
                    user?.photoURL,
                    "buyer"
                )
                toast.success("successfully login");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const saveUserFromDB = (name, email, image, userRole) => {
        const userInfo = {
            name,
            email,
            image,
            userRole
        };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                // getAccessToken(email);
            });
    };


    return (
        <div className="max-w-[1000px] mx-auto  py-9 px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <Lottie animationData={loginJson} />
                </div>

                <div className="border shadow-xl rounded-xl p-7">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h2 className="text-center text-2xl pb-9 font-semibold">Login</h2>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: "Email Address is required",
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-400">{errors.email?.message}</p>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 character or longerr",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-400">{errors.password?.message}</p>
                            )}
                            <label className="label">
                                <span className="label-text text-xs hover:underline cursor-pointer">
                                    Forgot Password?
                                </span>
                            </label>
                        </div>
                        <button
                            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none px-6 py-3 text-white rounded-lg font-semibold cursor-pointer uppercase hover:rounded-full"
                            type="submit"
                        >
                            {" "}
                            {loading ? <SmallSpinner></SmallSpinner> : "Login"}
                        </button>
                    </form>
                    <div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid h-20 card rounded-box place-items-center">
                                <p>
                                    New to Doctors Portal?{" "}
                                    <Link
                                        className="text-secondary font-semibold hover:underline"
                                        to="/signup"
                                    >
                                        Create new account
                                    </Link>{" "}
                                </p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="grid h-20 card rounded-box place-items-center">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="border-2 border-black w-full rounded-lg flex items-center justify-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none px-6 py-3 text-white hover:rounded-full"
                                >
                                    <FaGoogle className="text-2xl"></FaGoogle>
                                    <span className="font-semibold">CONTINUE WITH GOOGLE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;