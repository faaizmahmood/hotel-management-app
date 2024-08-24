import { useEffect, useState } from "react";

const useAdminReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:4000/api/review');

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                setReviews(data.reverse());
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Error while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, reviews };
};

export default useAdminReviews;
