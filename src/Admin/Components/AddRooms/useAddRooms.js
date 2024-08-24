import { useFormik } from "formik";
import * as Yup from 'yup';

const useAddRooms = () => {

    const validationSchema = Yup.object({
        roomNo: Yup.string().required('Room No is required'),
        roomType: Yup.string().oneOf(['Standard Room', 'Deluxe Room', 'Suite', 'Family Room', 'Executive Room'], 'Invalid Room Type').required('Room Type is required'),
        roomServentName: Yup.string().required('Room Servant Name is required'),
        roomServentContact: Yup.string().required('Room Servant Contact is required'),
        pricePerDay: Yup.number().required('Price Per Day is required').positive('Price must be a positive number'),
        status: Yup.string().oneOf(['Available', 'Not Available'], 'Invalid Room Status').required('Room Status is required'),
        description: Yup.string().required('Room Description is required'),
        coverImg: Yup.mixed().required('Cover Image is required'),
        image1: Yup.mixed(),
        image2: Yup.mixed(),
    });

    const initialValues = {
        roomNo: '',
        roomType: '',
        roomServentName: '',
        roomServentContact: '',
        pricePerDay: '',
        status: '',
        description: '',
        coverImg: null,
        image1: null,
        image2: null,
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('roomNo', values.roomNo);
            formData.append('roomType', values.roomType);
            formData.append('roomServantName', values.roomServentName);
            formData.append('servantContact', values.roomServentContact);
            formData.append('pricePerDay', values.pricePerDay);
            formData.append('RoomDescription', values.description);
            formData.append('AvailabilityStatus', values.status);
            formData.append('coverImage', values.coverImg);
            if (values.image1) formData.append('image1', values.image1);
            if (values.image2) formData.append('image2', values.image2);

            try {
                // Check if roomNo already exists before submitting the form
                const response2 = await fetch('https://solstice-interesting-burrito.glitch.me/api/getrooms');
                const roomsData = await response2.json();

                const isRoom = roomsData.find((item) => item.roomNo === values.roomNo);

                if (isRoom) {
                    alert("Room No already exists!");
                    return;
                }

                // Submit form data
                const response = await fetch('https://solstice-interesting-burrito.glitch.me/api/addrooms', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    if (response.status === 400) {
                        alert("Room number already exists.");
                    }                     else {
                        throw new Error('Failed to submit form');
                    }
                    return;
                }

                if(response.ok){
                    if(response.status === 200){
                        alert("Room Added!");
                        formik.resetForm()
                        formik.setFieldValue('coverImg', null)
                        formik.setFieldValue('image1', null)
                        formik.setFieldValue('image2', null)
                    }
                }

                const data = await response.json();
                console.log('Success:', data);
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            }
        }
    });


    

    return { formik };
};

export default useAddRooms;
