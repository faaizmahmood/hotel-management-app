import { useEffect, useState } from "react";



const useUserDashBoard=()=>{
    const [roomsData, setRoomsData] = useState([])

    const [ loading, setLoading ] = useState(false)

    const [startLoading, setStartLoading] = useState(true);

    const [userReservationsCount, setUserReservationsCount] = useState("0")


    useEffect(() => {
        setTimeout(() => {
          setStartLoading(false);
        }, 1000);
      }, []);

    useEffect(() => {
        const fetchRoomsData = async () => {
            try {
                setLoading(true)
                const res = await fetch('http://localhost:4000/api/getrooms');

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
                const res = await fetch("http://localhost:4000/api/bookings")

                const data = await res.json()

                setUserReservationsCount(data.length)

            } catch (error) {
                console.log("Error", error)
            }
        }

        fetchData()
    }, [])

    return { roomsData, loading, startLoading, userReservationsCount };
}

export default useUserDashBoard;