import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])
    return (
        <div>
            <h2>No reviews were added.</h2>
            <div className="reviews">
                {
                    allReviews.map(review => <p>{review.message}</p>)
                }
            </div>


        </div>
    );
};

export default MyReviews;