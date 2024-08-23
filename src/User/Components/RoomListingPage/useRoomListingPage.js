import { useEffect, useState } from "react";

const useRoomListingPage = () => {

    const [roomsData, setRoomsData] = useState([])

    const [ loading, setLoading ] = useState(false)

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

    return { roomsData, loading };
}

export default useRoomListingPage;
