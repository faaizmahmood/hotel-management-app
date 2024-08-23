import { useEffect, useState } from "react"
import { useLocation } from 'react-router'


const useRoomDetailPage = () => {

    const location = useLocation()

    const room = location.state;

    const [loading , setLoading] = useState(true)

    const [activeImg, setActiveImg] = useState(`http://localhost:4000/images/${room.CoverImageURL}`)

    const changeImage = (e) => {
        const id = e.target.getAttribute("data-imgID")

        if (id === '1') setActiveImg(`http://localhost:4000/images/${room.CoverImageURL}`)
        if (id === '2') setActiveImg(`http://localhost:4000/images/${room.image1URL}`)
        if (id === '3') setActiveImg(`http://localhost:4000/images/${room.image2URL}`)

    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    },[])


    return { changeImage, room, activeImg, loading }

}

export default useRoomDetailPage