import { useEffect, useState } from "react"
import { useLocation } from 'react-router'


const useRoomDetailPage = () => {

    const location = useLocation()

    const room = location.state;

    const [loading , setLoading] = useState(true)

    const [activeImg, setActiveImg] = useState(`https://solstice-interesting-burrito.glitch.me/images/${room.CoverImageURL}`)

    const changeImage = (e) => {
        const id = e.target.getAttribute("data-imgID")

        if (id === '1') setActiveImg(`https://solstice-interesting-burrito.glitch.me/images/${room.CoverImageURL}`)
        if (id === '2') setActiveImg(`https://solstice-interesting-burrito.glitch.me/images/${room.image1URL}`)
        if (id === '3') setActiveImg(`https://solstice-interesting-burrito.glitch.me/images/${room.image2URL}`)

    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    },[])


    return { changeImage, room, activeImg, loading }

}

export default useRoomDetailPage