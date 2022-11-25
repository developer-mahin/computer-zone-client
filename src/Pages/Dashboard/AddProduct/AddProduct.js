import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FileUploader } from "react-drag-drop-files";
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/Spinner/SmallSpinner';

const fileTypes = ["JPG", "PNG", "GIF"];

const AddProduct = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);

    };
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState("")
    const sliceDate = date.toString().slice(0, 24)



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
                    verify: false,
                    location: location,
                    resale_price: resale_price,
                    original_price: original_price,
                    total_view: 302,
                    years_of_use: years_of_use,
                    name: product_name,
                    published_date: sliceDate,
                    picture: data.data.display_url,
                    condition_type: type,
                    description
                }
                // save product in db
                fetch("http://localhost:5000/addProduct", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json", 
                        authorization: `bearer ${localStorage.getItem("access-token")}`
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
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
        <section className="p-6">
            <div className='container mx-auto py-9'>
                <div className="">
                    <p className="inline-block px-3 py-px font-semibold tracking-wider text-accent uppercase rounded-full bg-gradient-to-r from-secondary to-primary">
                        Add product
                    </p>
                    <h2 className="text-3xl font-bold">
                        Add Your Products
                    </h2>
                </div>
            </div>
            <form onSubmit={handleAddProduct} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Product Information</p>

                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Product name</label>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Product name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Condition Type</label>
                            <select
                                className='input input-bordered w-full'
                                name="type"
                            >
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Description</label>
                            <input
                                name="description"
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Resale price</label>
                            <input
                                name="resale_price"
                                type="text"
                                placeholder="Resale price"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Original price</label>
                            <input
                                name="original_price"
                                type="text"
                                placeholder="Original price"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Years of use</label>
                            <input
                                name="years_of_use"
                                type="text"
                                placeholder="Years of use"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Category id</label>
                            <input
                                name="category"
                                type="number"
                                placeholder="Category id"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Location</label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Rating</label>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2 flex items-center gap-2">
                            <label className="text-sm">Check And Add Todays Date </label>
                            <input
                                onClick={() => setDate(new Date())}
                                name="date"
                                type="checkbox"
                                placeholder="Location"
                                className=""
                                required
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Product Image</label>
                            <div>
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Seller Information</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Username</label>
                            <input
                                name="name"
                                type="text"
                                value={user?.displayName}
                                disabled
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={user?.email}
                                disabled
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="col-span-full">
                            <button type="submit" className="btn btn-outline ">
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