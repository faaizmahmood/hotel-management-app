import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserTypeContext} from '../../../ReduxStore/store';

const SideBar = () => {
    const { loggedInUserType } = useContext(UserTypeContext)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (loggedInUserType === 'user') {
            navigate('/user-dashBoard');
        }
    }, [loggedInUserType, navigate]);

    return (
        <h1>Dash Board</h1>

    );
};

export default SideBar;
