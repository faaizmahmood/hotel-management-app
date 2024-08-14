import React, { createContext, useState } from 'react';

export const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
    const [loggedInUserType, setLoggedInUserType] = useState('');

    return (
        <UserTypeContext.Provider value={{ loggedInUserType, setLoggedInUserType }}>
            {children}
        </UserTypeContext.Provider>
    );
};

