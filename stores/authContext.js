import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    const [userCtx, setUser] = useState(null)

    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log("login event...")
        })
        
        netlifyIdentity.init()
    }, [])

    const loginCtx = () => {
        netlifyIdentity.open()
    } 

    const ctx = {
        user: userCtx,
        login: loginCtx,
    }

    return (
        <AuthContext.Provider value={ctx}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;