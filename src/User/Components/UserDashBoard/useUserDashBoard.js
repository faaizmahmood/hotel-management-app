import { useContext, useEffect, useState } from "react";
import { UserTypeContext } from "../../../ReduxStore/store";



const useUserDashBoard = () => {
    const [roomsData, setRoomsData] = useState([])

    const [loading, setLoading] = useState(false)

    const [startLoading, setStartLoading] = useState(true);

    const [userReservationsCount, setUserReservationsCount] = useState("0")

    const { loggedInUser } = useContext(UserTypeContext)


    useEffect(() => {
        setTimeout(() => {
            setStartLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        const fetchRoomsData = async () => {
            try {
                setLoading(true)
                const res = await fetch('https://solstice-interesting-burrito.glitch.me/api/getrooms');

                const data = await res.json();
                console.log(data)
                setRoomsData(data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error('Failed to fetch room data:', error);
            }
        };
        fetchRoomsData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://solstice-interesting-burrito.glitch.me/api/bookings")

                const data = await res.json()

                const filteredReservations = data.filter((ele, ind) => loggedInUser.userId === ele.userId)

                setUserReservationsCount(filteredReservations.length)

            } catch (error) {
                console.log("Error", error)
            }
        }

        fetchData()
    }, [])

    return { roomsData, loading, startLoading, userReservationsCount };
}

export default useUserDashBoard;