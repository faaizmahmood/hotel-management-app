import { useEffect, useState } from "react";



const useDashBoard = () => {

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({
    currentBookings: [],
    totalRooms: 0,
    totalReviews: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const fetchData = async () => {

      try {
        const responses = await Promise.all([
          fetch('https://solstice-interesting-burrito.glitch.me/api/bookings'),
          fetch('https://solstice-interesting-burrito.glitch.me/api/getrooms'),
          fetch('https://solstice-interesting-burrito.glitch.me/api/review')
        ])

        if (responses.every(res => res.ok)) {
          const [currentBookingsRes, totalRoomsRes, totalReviewsRes] = responses;

          const [currentBookings, totalRooms, totalReviews] = await Promise.all([
            currentBookingsRes.json(),
            totalRoomsRes.json(),
            totalReviewsRes.json()
          ]);


          setData({
            currentBookings: currentBookings,
            totalRooms: totalRooms.length,
            totalReviews: totalReviews.length,
          });

        } else {
          alert("Error while fetching dashboard data");
        }

      } catch (error) {
        alert("Error while fetching dashboard data");
      } finally {
        setLoading(false);
      }

    }

    fetchData()
  }, [])

  return { loading, data }
}


export default useDashBoard;