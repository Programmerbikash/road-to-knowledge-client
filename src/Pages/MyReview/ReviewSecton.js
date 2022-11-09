import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SingleSection from "./SingleSection/SingleSection";

const ReviewSecton = () => {
  const { user } = useContext(AuthContext);
    const reviewInfo = useLoaderData();
    const [review, setReview] = useState([]);
    const { _id } = reviewInfo;
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setReview(data);
        })
      },[])

  return (
    <div className="mt-10 mb-20">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Title</th>
              <th>Review Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            review.map(view => <SingleSection
              key={view._id}
              view={view} image={user?.photoURL}
            ></SingleSection>)
          }
          </tbody>
        </table>
      </div>
      <div className="text-center">
      <Link to={`/checkOut/${_id}`}><button className="btn btn-info">CheckOut</button></Link>
      </div>
    </div>
  );
};

export default ReviewSecton;