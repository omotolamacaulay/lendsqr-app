import { useUsersReducer } from "./useUserReducer";
import React, { useContext } from 'react'

import { User, UserAction, UserDetail } from '../types';

type UserContextType = {
    users: User[]
    user: UserDetail
    usersDispatch: React.Dispatch<UserAction>
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
    children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [{ users, user }, usersDispatch] = useUsersReducer();
    return (
        <UserContext.Provider value={{ users, user, usersDispatch }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUsers = () => {
    const usersCtx = useContext(UserContext);
    if (!usersCtx) {
        throw new Error("Component beyond UserContext!")
    }
    return usersCtx;
}