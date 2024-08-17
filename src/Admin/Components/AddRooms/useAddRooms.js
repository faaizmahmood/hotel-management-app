import { useFormik } from "formik"
import * as Yup from 'yup'

const useAddRooms = () => {


    const validationSchema= Yup.object({
        roomNo: Yup.string().required('Room No is Required'),
        roomType: Yup.string().oneOf(['Standard Room', 'Deluxe Room', 'Suite', 'Family Room', 'Executive Room'], 'Invalid Room Type').required("Room Type is Required"),
        roomServentName: Yup.string().required('Room Servent is Required'),
        roomServentContact: Yup.string().required('Room Servent is Required'),
        pricePerDay: Yup.string().required('Room Servent Contact is Required'),
        status: Yup.string().oneOf(['Available', 'Not Available',], 'Invalid Room Status').required("Room Status is Required"),
        description: Yup.string().required('Room Servent Contact is Required'),
        coverImg: Yup.mixed().required('Cover Image is Required'),

    })
    const initialValues={
        roomNo:'',
        roomType:'',
        roomServentName:'',
        roomServentContact:'',
        pricePerDay:'',
        status:'',
        description:'',
        coverImg: '',
        image1:"",
        image2:''
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:async  (values)=>{

        const formData = new FormData();
        

        formData.append('roomNo', formik.values.roomNo)
        formData.append('roomType', formik.values.roomType)
        formData.append('roomServantName', formik.values.roomServentName)
        formData.append('servantContact', formik.values.roomServentContact)
        formData.append('pricePerDay', formik.values.pricePerDay)
        formData.append('RoomDescription', formik.values.description)
        formData.append('AvailabilityStatus', formik.values.status)
        formData.append('CoverImageURL', formik.values.coverImg)
        formData.append('image1URL', formik.values.image1)
        formData.append('image2URL', formik.values.image2)


        try {
            const response = await fetch('http://localhost:4000/api/addrooms', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            if(response.status === 400){
                alert("Cover Image is Required!")
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
         console.log(values)
        }

    })

    return {formik}
}

export default useAddRooms