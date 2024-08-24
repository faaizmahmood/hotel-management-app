import { useEffect, useState } from "react";

const useHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://solstice-interesting-burrito.glitch.me/api/review');

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                setHistory(data.reverse());
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Error while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, history };
};

export default useHistory;
