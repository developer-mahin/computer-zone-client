import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext)


    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.productName.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value; 
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const years_of_use = form.years_of_use.value;
        const category = form.category.value;
        const location = form.location.value;
        const productImg = form.image.value

        // const formData = new FormData()
        // formData.append("image", productImg)

        console.log(productImg)



        // const productData = {
        //     // category_id
        // }
    }


    return (
        <section className="p-6  ">
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
                            />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input
                                name="price"
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full"
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
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Resale price</label>
                            <input
                                name="resale_price"
                                type="number"
                                placeholder="Resale price"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Original price</label>
                            <input
                                name="original_price"
                                type="number"
                                placeholder="Original price"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Years of use</label>
                            <input
                                name="years_of_use"
                                type="text"
                                placeholder="Years of use"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Category id</label>
                            <input
                                name="category"
                                type="number"
                                placeholder="Category id"
                                className="input input-bordered w-full"
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Location</label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full"
                            />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Product Image</label>
                            <input
                                name="image"
                                type="file"
                                placeholder=""
                                className="w-full"
                                accept="image/png, image/jpeg"
                            />
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
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="col-span-full">
                            <button type="submit" className="btn btn-outline ">Add product</button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </section>
    );
};

export default AddProduct;