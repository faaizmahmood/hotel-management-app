import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router';

const useReview = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const currentReservation = location.state;

    const formik = useFormik({
        initialValues: {
            userName: currentReservation.userName,
            userEmail: currentReservation.userEmail,
            reviewText: '',
            rating: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string().required('Name is required'),
            userEmail: Yup.string().email('Invalid email').required('Email is required'),
            reviewText: Yup.string().required('Review text is required'),
            rating: Yup.number().min(1).max(5).required('Rating is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);

            const reviewData = {
                checkInDate: currentReservation.checkInDate,
                checkOutDate: currentReservation.checkOutDate,
                duration: currentReservation.duration,
                pricePerDay: currentReservation.pricePerDay,
                roomNo: currentReservation.roomNo,
                roomType: currentReservation.roomType,
                totalPrice: currentReservation.totalPrice,
                userContact: currentReservation.userContact,
                userEmail: currentReservation.userEmail,
                userId: currentReservation.userId,
                userName: currentReservation.userName,
                reviewText: values.reviewText,
                rating: values.rating,
            };

            try {
                const reviewResponse = await fetch('https://solstice-interesting-burrito.glitch.me/api/review', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });

                if (!reviewResponse.ok) {
                    throw new Error('Error submitting review');
                }

                const deleteResponse = await fetch(`https://solstice-interesting-burrito.glitch.me/api/bookings/${currentReservation.roomNo}`, {
                    method: 'DELETE',
                });

                if (!deleteResponse.ok) {
                    throw new Error('Error deleting booking');
                }

                const formData = {
                    AvailabilityStatus: 'Available'
                };

                const updateRoomResponse = await fetch(`https://solstice-interesting-burrito.glitch.me/api/updateRoomStatus/${currentReservation.roomNo}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!updateRoomResponse.ok) {
                    throw new Error('Error updating room status');
                }

                alert('Review Submitted');
                formik.resetForm()
            } catch (error) {
                alert(`Error: ${error.message}`);
            } finally {
                setLoading(false);
            }
        },
    });

    return { formik, loading };
};

export default useReview;
