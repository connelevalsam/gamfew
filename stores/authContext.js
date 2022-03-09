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

        netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('logout event')
        })
        
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])

    const loginCtx = () => {
        netlifyIdentity.open()
    } 

    const logoutCtx = () => {
        netlifyIdentity.logout()
    }

    const ctx = {
        user: userCtx,
        login: loginCtx,
        logout: logoutCtx,
    }

    return (
        <AuthContext.Provider value={ctx}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;