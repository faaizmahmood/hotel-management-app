import { useEffect, useState } from "react";

const useManageEmployee = () => {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://solstice-interesting-burrito.glitch.me/api/employees');

        if (res.ok) {
          const data = await res.json();
          setEmployeeData(data.reverse()); // Reversing the data if needed
        } else {
          alert("Error while fetching employee records");
        }
      } catch (error) {
        alert("Error while fetching employee records");
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchData();
  }, []);

  return { loading, employeeData };
};

export default useManageEmployee;
