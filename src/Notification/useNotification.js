import { useEffect, useState } from "react";


const useNotification = () => {

    const [loading, setLoading] = useState(true)

    const [bookingsData, setBookingsData] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://solstice-interesting-burrito.glitch.me/api/bookings")

                const data = await res.json()

                setBookingsData(data.reverse())

            } catch (error) {
                console.log("Error", error)
            }
        }

        fetchData()
    }, [])

    return { loading, bookingsData }

}


export default useNotification;