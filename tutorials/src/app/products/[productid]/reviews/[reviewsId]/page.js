import React from "react";

const ReviewsId = ({ params }) => {
  return (
    <div>
      <h1>review id: {params.reviewsId} </h1>
      <h1>product id: {params.productid} </h1>
    </div>
  );
};

export default ReviewsId;
