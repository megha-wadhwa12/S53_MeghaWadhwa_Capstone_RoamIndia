import { User, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { createContext, useLayoutEffect, useRef, useState } from 'react'

interface AppContextType {
    aboutRef: React.MutableRefObject<HTMLDivElement>;
    loginDone: boolean;
    loginSuccessful: boolean;
    askUser: string;
    loggedInUser: Object;
    setAskUser: (askUser: string) => void;
    setLoginSuccessful: (loginSuccessful: boolean) => void;
    setLoginDone: (loginDone: boolean) => void;
    setLoggedInUser: (loggedInUser: Object) => void;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface ParentContextProps {
    children: React.ReactNode; // Define the type of the children prop
}

const ParentContext: React.FC<ParentContextProps> = ({ children }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const aboutRef = useRef<HTMLDivElement>(document.createElement('div'))
    const [loginDone, setLoginDone] = useState<boolean>(true)
    const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false)
    const [askUser, setAskUser] = useState<string>("")
    const [loggedInUser, setLoggedInUser] = useState<Object>("")
    console.log(loggedInUser);



    useLayoutEffect(() => {
        if (isAuthenticated) {
            setLoginDone(false);
            const checkUser = async (user: User | undefined) => {
                if (!user) {
                    return
                }
                const res = await axios.post(import.meta.env.VITE_CHECKBYMAIL, user)
                return res.data
            }
            checkUser(user).then((res) => {
                if (!res.found) {
                    if (res.isSocial) {
                        setAskUser("Username")
                    } else {
                        setAskUser("Name")
                    }
                } else {
                    setLoggedInUser(res.OneUser)
                    setLoginSuccessful(true)
                    setLoginDone(true)
                }

            }).catch(err => {
                setLoginSuccessful(false)
                setLoginDone(true)
                console.log(err);

            })
        }
    }, [isAuthenticated])

    useLayoutEffect(() => {
        if (loginSuccessful) {
            setAskUser("")
        }
    }, [loginSuccessful])
    useLayoutEffect(() => {
        if (isLoading) {
            setLoginDone(false)
        } else if (!isLoading && !isAuthenticated) {
            setLoginDone(true)
            setLoginSuccessful(false)
        }
    }, [isLoading])


    return (
        <AppContext.Provider value={{ aboutRef, loginDone, loginSuccessful, askUser, loggedInUser, setAskUser, setLoginDone, setLoginSuccessful, setLoggedInUser }}>
            {children}
        </AppContext.Provider>
    )
}

export default ParentContext

