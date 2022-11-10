import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);

    useTitle('MyReview')
    
    useEffect(() => {
        fetch(`http://localhost:5000/currentReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [user?.email])
    
    const handleDeleteReview = (id) => {
        const procced = window.confirm(
          "Are you sure? You want to delete your review"
        );
        if (procced) {
          fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('review deleted successfully');
                    const remaining = service.filter(review => review._id !== id);
                    setService(remaining);
                }
            });
        }
    };
    
    const handleReviewUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('review-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.modifiedCount);
                if (data.modifiedCount > 0) {
                    const remaining = service.filter(review => review._id !== id);
                    const approving = service.find(review => review._id === id);
                    approving.status = 'Approvied'

                    const newOrders = [approving, ...remaining];
                    setService(newOrders);
                }
        })
    }

    return (
        <div className="mt-20 mb-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete Service</th>
              <th>Course Name</th>
              <th>Review Message</th>
              <th>Update Info</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            service.map(view => <MyReviewRow
              key={view._id}
              view={view} handleDeleteReview={handleDeleteReview} handleReviewUpdate={handleReviewUpdate} image={user?.photoURL}
            ></MyReviewRow>)
          }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyReview;