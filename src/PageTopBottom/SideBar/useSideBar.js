import { useContext } from "react"
import { UserTypeContext } from "../../ReduxStore/store"
import { useNavigate } from "react-router"



const useSideBar = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserTypeContext)

    const navigate = useNavigate()

    const logout = () => {

        if (loggedInUser) {
            localStorage.removeItem('currentUser')
            setLoggedInUser(null)
            navigate('/auth-sign-in')
        }

    }

    return { logout }

}

export default useSideBar