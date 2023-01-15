import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import PrimaryButton from "../Button/PrimaryButton";
import SmallSpinner from "../Spinner/SmallSpinner";
import ReviewCard from "./ReviewCard";


const ReviewSection = ({ product }) => {
  const { _id } = product
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const date = new Date()


  const handlePostReview = (event) => {
    setLoading(true)
    event.preventDefault()
    const review = event.target.review.value;
    const reviewInfo = {
      productId: _id,
      review,
      userName: user?.displayName,
      userImg: user?.photoURL,
      userEmail: user?.email,
      date
    }

    fetch("https://computer-zone-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`
      },
      body: JSON.stringify(reviewInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Successfully review added")
          event.target.reset()
          setLoading(false)
        }
      })
      .catch(err => {
        toast.error(err.message)
        setLoading(false)
      })
  }


  const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["allReview"],
    queryFn: async () => {
      const res = await fetch(`https://computer-zone-server.vercel.app/product-review?id=${_id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`
        }
      })
      const data = await res.json()
      return data;
    }
  })

  refetch()

  return (
    <div className="container mx-auto">
      <div className="text-center py-8">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
          ADD REVIEW
        </p>
        <h2 className="text-3xl  font-bold uppercase">
          Please Add your review
        </h2>
      </div>
      <form
        onSubmit={handlePostReview}
      >
        <textarea
          name="review"
          id=""
          cols="30"
          rows="4"
          placeholder="Write your review..."
          className="lg:w-1/2 w-full rounded shadow my-3 px-6 py-2 border"
        ></textarea>
        <br />
        <PrimaryButton>
          {
            loading ? <SmallSpinner></SmallSpinner> : "Review"
          }
        </PrimaryButton>
      </form>
      <>

        {
          allReviews.length ? <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-12 mt-3">

              {
                allReviews?.map(singleReview => <ReviewCard
                  key={singleReview._id}
                  singleReview={singleReview}
                  refetch={refetch}
                ></ReviewCard>)
              }

            </div>
          </> : <>
            <h2>There are no reviews in this product</h2>
          </>
        }

      </>
    </div>
  );
};

export default ReviewSection;
