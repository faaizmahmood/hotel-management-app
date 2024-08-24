import { useEffect, useState } from "react"


const useManageRooms=()=>{

    const [roomsData, setRoomsData] = useState([])

    const [loading, setLoding] = useState(true)


    useEffect(()=>{
    setTimeout(()=>{
        setLoding(false)
    }, 1000)
    },[])

    useEffect(() => {
        const fetchRoomsData = async () => {    
            try {
                setLoding(true)
                const res = await fetch('https://solstice-interesting-burrito.glitch.me/api/getrooms');
                const data = await res.json();
                console.log(data)
                setRoomsData(data);
                setLoding(false)
            } catch (error) {
                setLoding(false)
                console.error('Failed to fetch room data:', error);
            }
        };
        fetchRoomsData();
    }, []);

    return {roomsData, loading};
}


export default useManageRooms