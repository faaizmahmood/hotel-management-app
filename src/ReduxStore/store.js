import React, { createContext, useEffect, useState } from 'react';

export const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setLoggedInUser(currentUser);
        }
    }, []);

    return (
        <UserTypeContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </UserTypeContext.Provider>
    );
};
