import { useEffect, useState } from "react"


const useManageRooms=()=>{

    const [roomsData, setRoomsData] = useState([])

    useEffect(() => {
        const fetchRoomsData = async () => {
            try {
                const res = await fetch('http://localhost:4000/api/getrooms');
                

                const data = await res.json();
                console.log(data)
                setRoomsData(data);
            } catch (error) {
                console.error('Failed to fetch room data:', error);
            }
        };
        fetchRoomsData();
    }, []);

    return {roomsData};
}


export default useManageRooms