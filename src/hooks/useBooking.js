import { toast } from "react-hot-toast";

const booking = (product, user,setLoading) => {
    setLoading(true)
    const bookingInfo = {
        itemImage: product.picture,
        itemName: product.name,
        itemPrice: product.resale_price,
        userName: user?.displayName,
        userEmail: user?.email,
        userPhone: "",
        userLocation: "location",
        productId: product._id,
        status: product.status
    }

    fetch("https://computer-zone-server.vercel.app/booking", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookingInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                toast.success(`Successfully ${product.name} booked`)
                setLoading(false)
            }
        })
        .catch(err => {
            setLoading(false)
            toast.error(err.message)
        })
}

export default booking;