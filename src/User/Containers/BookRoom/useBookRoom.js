import { useFormik } from "formik";
import * as Yup from 'yup';
import { UserTypeContext } from '../../../ReduxStore/store';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from "react";

const useRoomBooking = () => {

    const [loading, setLoading] = useState(true)

    const { loggedInUser } = useContext(UserTypeContext);

    const location = useLocation();

    const room = location.state;

    const validationSchema = Yup.object({
        roomNo: Yup.string().required('Room No is required'),
        roomType: Yup.string().required('Room Type is required'),
        userName: Yup.string().required('User Name is required'),
        userContact: Yup.string().required('User Contact is required'),
        userEmail: Yup.string().email('Invalid email format').required('Email is required'),
        checkInDate: Yup.date().required('Check-in Date is required'),
        checkOutDate: Yup.date()
            .min(Yup.ref('checkInDate'), 'Check-out Date cannot be before Check-in Date')
            .required('Check-out Date is required'),
    });

    const initialValues = {
        roomNo: room?.roomNo || '',
        roomType: room?.roomType || '',
        userName: loggedInUser?.name || '',
        userContact: loggedInUser?.phone || '',
        userEmail: loggedInUser?.email || '',
        userId: loggedInUser?.userId || '',
        checkInDate: '',
        checkOutDate: '',
        duration: '',
        pricePerDay: room?.pricePerDay || 0,
        totalPrice: '0',
    };

    const formik = useFormik({
        initialValues,
        validationSchema,

        onSubmit: async (values) => {
            const formData = {
                AvailabilityStatus: 'Not Available'
            }

            try {
                // Update room status
                const res = await fetch(`http://localhost:4000/api/updateRoomStatus/${room?.roomNo}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (res.ok) {
                    const data = await res.text();
                    console.log('Success:', data);
                    // alert('Room status updated successfully!');

                    // Prepare data for booking
                    const resBookingsData = {
                        roomNo: values.roomNo,
                        roomType: values.roomType,
                        userName: values.userName,
                        userContact: values.userContact,
                        userEmail: values.userEmail,
                        checkInDate: values.checkInDate,
                        checkOutDate: values.checkOutDate,
                        duration: values.duration,
                        pricePerDay: values.pricePerDay,
                        totalPrice: values.totalPrice,
                    };

                    try {
                        // Book the room
                        const resBookings = await fetch(`http://localhost:4000/api/bookings`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(resBookingsData)
                        });

                        if (resBookings.ok) {
                            alert('Room booked successfully!');
                        } else {
                            alert('Failed to book room.');
                        }
                    } catch (error) {
                        alert('Failed to book room.');
                    }
                } else {
                    const errorData = await res.text();
                    console.error('Error:', errorData);
                    alert('Failed to update room status.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while updating the room status.');
            }
        },
    });

    useEffect(() => {
        if (formik.values.checkInDate && formik.values.checkOutDate) {
            const checkInDate = new Date(formik.values.checkInDate);
            const checkOutDate = new Date(formik.values.checkOutDate);
            const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
            const calculatedDuration = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days

            if (calculatedDuration >= 0) {
                const duration = calculatedDuration + 1; // Include both check-in and check-out days
                const pricePerDay = room?.pricePerDay || 0;
                const totalPrice = duration * pricePerDay;

                formik.setFieldValue('duration', duration);
                formik.setFieldValue('totalPrice', totalPrice);
            } else {
                formik.setFieldValue('duration', '');
                formik.setFieldValue('totalPrice', '0');
            }
        }
    }, [formik.values.checkInDate, formik.values.checkOutDate, room?.pricePerDay]);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })

    return { formik, loading };
};

export default useRoomBooking;