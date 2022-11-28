import React, { useContext, useEffect, useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import toast from 'react-hot-toast';
import BigSpinner from '../../../components/Spinner/BigSpinner';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const fileTypes = ["JPG", "PNG", "GIF"];

const AddProduct = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);

    };
    const { user, logOut } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState("")
    const sliceDate = date.toString().slice(0, 24)
    const [userRoleLoading, setUserRoleLoading] = useState(false)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserRoleLoading(true)
        fetch(`https://computer-zone-server.vercel.app/user/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                        .then(() => { })
                        .catch((err) => {
                            toast.error(err.message)
                        })
                }
                return res.json()
            })
            .then(data => {
                setUserData(data)
                setUserRoleLoading(false)
            })
    }, [user?.email, logOut])


    if(userRoleLoading){
        return <BigSpinner></BigSpinner>
    }

    const {verify} = userData;

    const handleAddProduct = (event) => {
        setLoading(true)
        event.preventDefault();
        const form = event.target;
        const product_name = form.productName.value;
        const type = form.type.value;
        const description = form.description.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const years_of_use = form.years_of_use.value;
        const category = parseInt(form.category.value);
        const location = form.location.value;
        const rating = form.rating.value;


        const formData = new FormData()
        formData.append("image", file)

        fetch(`https://api.imgbb.com/1/upload?key=77f09a682af2d728593ff4efd38c7386`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const productData = {
                    category_id: category,
                    rating: rating,
                    seller_name: user?.displayName,
                    seller_img: user?.photoURL,
                    seller_email: user?.email,
                    verify,
                    location: location,
                    resale_price: resale_price,
                    original_price: original_price,
                    total_view: 302,
                    years_of_use: years_of_use,
                    name: product_name,
                    published_date: sliceDate,
                    picture: data.data.display_url,
                    condition_type: type,
                    description,
                    status: "Available"
                }
                // save product in db
                fetch("https://computer-zone-server.vercel.app/addProduct", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem("access-token")}`
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => {
                        if (res.status === 401 || res.status === 403) {
                            return logOut()
                                .then(() => { })
                                .then((err) => {
                                    toast.message(err.message)
                                })
                        }
                        return res.json()

                    })
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Product successfully added")
                            form.reset()
                            setLoading(false)
                        }
                    })
                    .catch(err => {
                        toast.error(err.message)
                        setLoading(false)
                    })

            })

    }


    return (
        <section className="p-6 bg-[#1e2b47] ">
            <div className='container mx-auto py-9'>
                <div className="">
                    <p className="inline-block px-3 py-px font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        Add product
                    </p>
                    <h2 className="text-3xl font-bold text-gray-300">
                        Add Your Products
                    </h2>
                </div>
            </div>
            <form onSubmit={handleAddProduct} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-gray-300">Product Information</p>

                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Product name</label>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Product name"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Condition Type</label>
                            <select
                                className='input font-medium input-bordered w-full'
                                name="type"
                            >
                                <option className='font-medium' value="excellent">Excellent</option>
                                <option className='font-medium' value="good">Good</option>
                                <option className='font-medium' value="fair">Fair</option>
                            </select>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Description</label>
                            <input
                                name="description"
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Resale price</label>
                            <input
                                name="resale_price"
                                type="text"
                                placeholder="Resale price"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm text-gray-300">Original price</label>
                            <input
                                name="original_price"
                                type="text"
                                placeholder="Original price"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm text-gray-300">Years of use</label>
                            <input
                                name="years_of_use"
                                type="text"
                                placeholder="Years of use"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm text-gray-300">Category id</label>
                            <input
                                name="category"
                                type="number"
                                placeholder="Category id"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm text-gray-300">Location</label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm text-gray-300">Rating</label>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full font-medium"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2 flex items-center gap-2">
                            <label className="text-sm text-gray-300">Check And Add Todays Date </label>
                            <input
                                onClick={() => setDate(new Date())}
                                name="date"
                                type="checkbox"
                                placeholder="Location"
                                className=""
                                required
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3 text-gray-300">
                            <label className="text-sm text-gray-300">Product Image</label>
                            <div>
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-gray-300">Seller Information</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Username</label>
                            <input
                                name="name"
                                type="text"
                                value={user?.displayName}
                                disabled
                                required
                                className="input input-bordered w-full font-medium"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-gray-300">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={user?.email}
                                disabled
                                required
                                className="input input-bordered w-full font-medium"
                            />
                        </div>
                        <div className="col-span-full">
                            <button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary  px-6 py-3 rounded-lg text-white font-semibold hover:rounded-full">
                                {
                                    loading ? <SmallSpinner></SmallSpinner> : "Add product"
                                }
                            </button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </section>
    );
};

export default AddProduct;