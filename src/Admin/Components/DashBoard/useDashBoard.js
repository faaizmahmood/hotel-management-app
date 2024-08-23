import { useEffect, useState } from "react";



const useDashBoard=()=>{

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
    },[])

return {loading}
}


export default useDashBoard;